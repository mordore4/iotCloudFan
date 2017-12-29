const express = require('express');
const router = express.Router();
//const database = require('../persistence/mysql');

router.post('/temperature', (req, res) => {
    res.json(req.body);
});

router.post('/device_settings', (req, res) => {
    //database.test();
    res.json(req.body);
});

module.exports = router;