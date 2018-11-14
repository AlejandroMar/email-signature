const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const UserSignatureModel = require('../models/UserSignature');


const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, './uploads/');
    },
    filename(req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/', upload.single('avatar'), (req, res) => {
    new UserSignatureModel({
        clientName: req.body['client-name'],
        emailSignature: req.file.path,
    }).save()
        .then(result => console.log(result));

    console.log(req.body.file);
    res.send(req.body['client-name']);
});

module.exports = router;
