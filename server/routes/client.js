const express = require('express');
const router = express.Router();

router.get('/settings', (req, res) => {
  res.render("index");
});

router.get('/', (req, res) => {
    res.render("login");
  });

router.get('/login', (req, res) => {
  res.render("login");
});

router.post('/login', (req, res) => {
    let data = req.body;
    let session = req.session.userInfo;
    if (session == undefined) {
        session = {};
    }
    for (info in data) {
        session[info] = data[info];
    }
    req.session.userInfo = session;
    res.redirect("/settings");
});

module.exports = router;