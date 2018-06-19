const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const Admin = mongoose.model('Admin');

router.get('/', (req, res) => {
    res.render('index/index');
});

router.get('/login', (req, res) => {
    Admin.find().then(admins => {
        console.log(admins);
        res.render('index/login', {
            admins,
        });
    });
});

module.exports = router;
