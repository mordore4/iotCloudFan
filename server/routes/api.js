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
        console.log(options);
        request.post(options, (error, response, body) => {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
        })
    } else {
        req.redirect("/login");
    }
});

module.exports = router;