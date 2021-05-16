const express = require('express');
const router = express.Router();
const Car = require('../models/cars');

const carCTRL = require('../controllers/car');

router.post('/', carCTRL.addCar);
router.get('/', carCTRL.getAllCars);
router.get('/:id', carCTRL.getCar);

module.exports = router;