const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.download('./createdFile/email-signature.html');
});

module.exports = router;
