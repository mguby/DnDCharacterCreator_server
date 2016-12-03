// Get the packages we need
var secrets = require('./config/secrets');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// Connect to mongodb databse
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(secrets.mongo_connection);

var passport = require('passport');
var session = require('express-session');
var cookieParser = require('cookie-parser');

// Create our Express application
var app = express();

// Use environment defined port or 3000
var port = process.env.PORT || 8080;

//Allow CORS so that backend and frontend could pe put on different servers
var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
};
app.use(allowCrossDomain);

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(cookieParser());
app.use(session({
  secret : 'passport',
  resave: false,
  saveUninitialized: false,
  cookie : { httpOnly: false}
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
  res.locals.user = req.user || null;
  next();
});

// Use routes as a module (see index.js)
require('./routes')(app, router);

// Start the server
app.listen(port);
console.log('Server running on port ' + port);
