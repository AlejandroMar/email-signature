const express = require('express');
const mongoose = require('mongoose');
const jsdom = require('jsdom');
const UserSignature = require('../models/UserSignature');

const { JSDOM } = jsdom;

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
    const {
        name, job, phone, fax, email, site
    } = req.body;
    (async function mongo() {
        let signature;
        try {
            signature = await UserSignature.findById(req.params.id);
            // res.send(`${signature.emailSignature}`);
            const { document } = new JSDOM(signature.emailSignature).window;
            console.log(document.querySelector('.phone').href);
        } catch (err) {
            console.log(err);
        }
    }());
    res.send('signa');
});
module.exports = router;
