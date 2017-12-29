//utilities
const bodyParser = require('body-parser');
const path = require('path');
const cons = require('consolidate');

//server
const express = require('express');
const app = express();
const server = require('http').createServer(app);
app.engine('html', cons.swig);
app.set('views', path.join(__dirname, '/public'));
app.set('view engine', 'html');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//session
const expressSession = require('express-session');
app.use(expressSession({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));

//routes
const api = require('./server/routes/api');
const clientRoutes = require('./server/routes/client');
app.use('/api', api);
app.use('/', clientRoutes);
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));



server.listen(process.env.PORT || 3000, () => {
    console.log('listening 3000');
  });