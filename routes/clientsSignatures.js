const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.sed('current clients with sigs');
});

module.exports = router;
