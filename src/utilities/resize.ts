import sharp from "sharp";


export default function resize(image: any, width: any, height: any, output: any)
{
    if(!width || !height)
    {
        console.log('Missing parameter');
        return
    }
    sharp(image)
  .resize(width, height)
  .toFile(output, (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log(info);
      console.log('Image resized successfully.');
    }
  });
}