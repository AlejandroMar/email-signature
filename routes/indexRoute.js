const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const UserSignatureModel = require('../models/UserSignature');


const storage = multer.memoryStorage();

const upload = multer({ storage });

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/', upload.single('avatar'), (req, res) => {
    new UserSignatureModel({
        clientName: req.body['client-name'],
        emailSignature: req.file.buffer
    }).save()
        .then(result => console.log('savedto mongo', result));

    console.log(req.file);
    res.render('index');
});

module.exports = router;
