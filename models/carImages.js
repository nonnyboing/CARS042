const mongoose = require('mongoose');

const imgSchema = mongoose.Schema({
    carId: {type: Number},
    images: {type: Buffer, contentType: String}
});

module.exports = mongoose.model('Images', imgSchema);