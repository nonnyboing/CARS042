const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    model : {type: String, required: true},
    make: {type: String, required: true},
    year: {type: Number, required: true},
    carId: {type: String, required: true},
    rating: {type: String},
    mileage: {type: String},
    status: {type: String},
    transmission: {type: String},
    engine: {type: String}
});

module.exports = mongoose.model('Car', carSchema);