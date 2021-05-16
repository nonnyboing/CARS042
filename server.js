const express = require('express');
const mongoose = require('mongoose');
//const fs = require('fs');
const config = require('./config');
const multer = require('multer');

const app = express();
app.use(express.json());
const Car = require('./models/cars');
const port = process.env.PORT || 4000;

const carRouter = require('./routes/car');
const imgRouter = require('./routes/images');

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

mongoose.connect(config, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(()=> console.log('Database Connected Successfully!'))
    .catch(err => console.log('Failed to connect' + err));

app.use('/cars', carRouter);
app.use('/images', imgRouter);

app.listen(port, ()=> console.log(`server is running on port ${port}`));