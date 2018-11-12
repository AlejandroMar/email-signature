const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.download('./views/email-signature.html');
});

module.exports = router;
