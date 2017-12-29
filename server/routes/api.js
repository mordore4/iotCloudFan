const express = require('express');
const router = express.Router();
const request = require('request');

router.post('/temperature', (req, res) => {
    let data = req.body;
    let session = req.session.userInfo;
    if (session != undefined) {
        let options = {
            url: `https://api.thinger.io/v2/users/${session.username}/devices/${session.device_code}/${session.resource}`,
            headers: {
                'Authorization': `Bearer ${session.auth}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"in": parseInt(data.temperature)})
        }
        request.post(options, (error, response, body) => {
            console.log('error:', error); // Print the error if one occurred
        })
        res.redirect("/settings");
    } else {
        res.redirect("/login");
    }
});

module.exports = router;