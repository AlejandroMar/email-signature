const express = require('express');
const createFile = require('../helpers/createDoc');


const router = express.Router();


router.post('/', (req, res) => {
    createFile(req.body);
    res.download('./views/email-signature.html');
});

module.exports = router;
