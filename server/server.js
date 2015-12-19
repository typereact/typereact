process.env.NODE_ENV = process.env.NODE_ENV||'development';
console.log('currently within the ' + process.env.NODE_ENV + ' node environment');

var express = require('express');
var React = require('react');
var Router = require('react-router');
var path = require('path');

//requirements for webpack middleware
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var webpackConfig = require('./../webpack.config.js');
var compiler = webpack(webpackConfig);

//authentication requirements
var passport = require('passport');
var session = require('express-session');
var GitHubStrategy = require('passport-github2').Strategy;


var bodyParser  = require('body-parser');
var app = express();

//database connection
var db = require('./database/dbconfig.js');

//build routers
var User = db.User;
var authRouter = require('./routers/authRouter.js')(express, passport, User, GitHubStrategy);
var challengeRouter = require('./routers/challengeRouter.js')(express);
var userChallengeController = require('./database/controllers/userChallengeController.js');

app.use(bodyParser.json());
app.use(session({ secret: 'typereact secret' }));
app.use(passport.initialize());
app.use(passport.session());

//redirect to play challenge when navigating to home page
app.get('/', function(req, res) {
  res.redirect('/playchallenge/1');
})

//the static middleware is not used at the moment because of the redirect immediately above
app.use(express.static(path.join(__dirname,'/../')));

//routes user to specific challenge page
app.get('/playchallenge/*', function(req, res) {
  res.sendFile(path.resolve(__dirname, '..', 'index.html'))
})

//routes user to challenge listing
app.get('/challengeList', function(req, res) {
  res.sendFile(path.resolve(__dirname, '..', 'index.html'))
})

app.post('/testurl', function(req, res) {
  console.log('trying to post');
  console.log(req.body);
  userChallengeController.postUserChallenge(req, res);
})

//use webpack Middleware to build index.html script
app.use(webpackMiddleware(compiler));

//use routers
app.use('/auth', authRouter);
app.use('/challenge', challengeRouter);
app.use('/isLoggedIn', function(req, res) {
  if(req.user) {
    res.send(req.user);
  } else {
    res.send(false);
  }
})

app.listen(8080);
module.exports = app;
