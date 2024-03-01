import express from 'express'
import imageApiRouter from './api/image'

const router = express.Router();

router.use('/api/images', imageApiRouter);
router.get('/api/hello', (req, res)=> {
    res.send('hello');

});


export default router; 