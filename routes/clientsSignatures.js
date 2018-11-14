const express = require('express');
const mongoose = require('mongoose');
const UserSignature = require('../models/UserSignature');

const router = express.Router();

router.get('/', (req, res) => {
    UserSignature.find({ clientName: 'alejo' })
        .then((result) => {
            res.send(`${result[0].emailSignature}`);
        });
    // res.send('current clients with sigs');
});

module.exports = router;
