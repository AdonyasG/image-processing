import express from "express";
import { existsSync, readFileSync } from "fs";
import resize from "../../utilities/resize";
import path from "path";
import { result } from "lodash";


const imageApiRouter = express.Router();

imageApiRouter.get('/', (req, res) => {
    const name = req.query.filename as string;
    const width: number = parseInt(req.query.width as string);
    const height: number = parseInt(req.query.height as string);
    const filename = `${name}.jpg`
    const imagePath = path.join(__dirname, '..', '..', 'assets', 'full', filename);
    const output = path.join(__dirname, '..', '..', 'assets', 'thumb', `${name}_thumb_${width}X${height}.jpg`);
    console.log


    if (!name) {
        res.status(400).send('Filename is missing in the query parameters');
        return;
    }

    if (existsSync(output))
     {
        const result = readFileSync(output)
        console.log(output)
        res.writeHead(200, { 'Content-Type': 'image/jpeg' });
        res.end(result, 'binary');
        console.log("Resized image exists")
        return
     }
    else if (existsSync(imagePath))
    {
        const image = readFileSync(imagePath);
        resize(image, width, height, output);
    } else {

        res.status(404).send('Image not found');
    }
});


export default imageApiRouter;