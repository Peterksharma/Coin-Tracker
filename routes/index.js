const express = require('express');
const router = express.Router();

// const { User } = require('../models');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/page', (req, res) => {
    res.render('page');
});

module.exports = router;

