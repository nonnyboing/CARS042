const Car = require('../models/cars');

exports.addCar = (req, res)=>{
    car = new Car({
        model : req.body.model,
        make: req.body.make,
        year: req.body.year,
        rating: req.body.rating,
        mileage: req.body.mileage,
        status: req.body.status,
        transmission: req.body.transmission,
        engine: req.body.engine,
        carId: req.body.carId
    });

    car.save()
        .then(() => {res.status(200).json({message: 'Car saved successfully'})})
        .catch(err => res.status(404).json({error: 'Failed to save car details: '+err}));
    
};

exports.getCar = (req, res)=>{
    Car.findOne({carId : req.body.carId})
        .then((car) => {res.status(201).json(car)})
        .catch(err => {res.status(400).json({error: 'failed to load resource ' + err})});
}

exports.getAllCars = (req, res)=>{
    Car.find()
        .then((cars) => {res.status(201).json(cars)})
        .catch(err => {res.status(400).json({error: 'failed to load resource ' + err})});
}
