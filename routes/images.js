const express = require('express');
const router = express.Router();
const Image = require('../models/carImages');

const imgCTRL = require('../controllers/images');

router.post('/', imgCTRL.addImages);
router.get('/', imgCTRL.getAllCars);

module.exports = router;