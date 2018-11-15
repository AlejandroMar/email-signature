const express = require('express');
// const mongoose = require('mongoose');
const jsdom = require('jsdom');
const fs = require('fs');

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
            document.querySelector('.name').textContent = name;
            document.querySelector('.name-label').textContent = job;
            document.querySelector('.phone').href = `+${phone}`;
            document.querySelector('.phone').textContent = `+${phone}`;
            document.querySelector('.fax').textContent = `+${fax}`;
            document.querySelector('.email').href = `mailto:${email}`;
            document.querySelector('.email').textContent = email;
            document.querySelector('.site').href = site;
            document.querySelector('.site').textContent = site;
            const page = `<!DOCTYPE html>
${document.documentElement.outerHTML}`;
            fs.writeFile('./createdFile/email-signature.html', page, 'utf8', (err) => {
                if (err) {
                    return console.log(err);
                }
                console.log('The file was saved!');
                res.render('signature', { page, id: req.params.id });
            });
        } catch (err) {
            console.log(err);
        }
    }());
});
module.exports = router;
