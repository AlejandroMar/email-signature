const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.download('./uploads/signature.html');
});

module.exports = router;
