const express = require('express');
const router = express.Router();
const Image = require('../models/carImages');
const multer = require('multer');

const upload = multer({
    limits: {
        fileSize: 12000000,
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)){
            cb(new Error('Please upload an image.'))
        }
        cb(undefined, true)
    }

});

const imgCTRL = require('../controllers/images');

router.post('/',upload.single('car'), imgCTRL.addImages);
router.get('/', imgCTRL.getAllCars);

module.exports = router;