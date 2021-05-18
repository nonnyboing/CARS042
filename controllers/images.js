const Image = require('../models/carImages');

exports.addImages = (req, res)=>{
    image = new Image({
        carId: req.body.carId,
        images: req.file.buffer
    });
    image.images.contentType = 'image/jpeg';

    image.save()
        .then(() => {res.status(200).json({message: 'Images saved successfully'})})
        .catch(err => res.status(404).json({error: 'Failed to save car Images: '+err}));
};

exports.getAllCars = (req, res)=>{
    Image.find()
        .then((images) => {res.contentType('json').send(images)})
        .catch(err => {res.status(400).json({error: 'failed to load images ' + err})});
}