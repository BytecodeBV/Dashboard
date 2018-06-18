const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index/index');
});

router.get('/login', (req, res) => {
    res.render('index/login');
});

module.exports = router;
