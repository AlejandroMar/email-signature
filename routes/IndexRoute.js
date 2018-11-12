const express = require('express');
const fs = require('fs');
const createFile = require('../helpers/createDoc');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/', (req, res) => {
    const htmlPage = createFile(req.body);
    const userInfo = {
        name: req.body.name,
        job: req.body.job,
        phone: req.body.phone,
        fax: req.body.fax,
        email: req.body.email,
        site: req.body.site,
    };
    fs.writeFileSync('./views/email-signature.html', htmlPage, (err) => {
        if (err) {
            throw Error;
        }
    });

    res.render('signature/signature', { userInfo });
});

module.exports = router;
