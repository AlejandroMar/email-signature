const express = require('express');
const mongoose = require('mongoose');
const UserSignature = require('../models/UserSignature');

const router = express.Router();

router.get('/', (req, res) => {
    UserSignature.find()
        .then((result) => {
            res.render('clients/clients', { clients: result });
        });
});

router.get('/form/:id', (req, res) => {
    res.render('form/inputForm', { id: req.params.id });
});

router.post('/form/:id', (req, res) => {
    res.send(req.params.id);
});
module.exports = router;
