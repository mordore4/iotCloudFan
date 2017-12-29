const express = require('express');
const router = express.Router();
const request = require('request');

router.post('/temperature', (req, res) => {
    let data = req.body;
    let session = req.session.userInfo;
    if (session != undefined) {
        request(`https://api.thinger.io/v2/users/singulasar/devices/esp8266/wanted_temp`)
    } else {
        req.redirect("/login");
    }
});

module.exports = router;