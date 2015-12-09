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

app.use(bodyParser.json());
app.use(session({ secret: 'typereact secret' }));
app.use(passport.initialize());
app.use(passport.session());

//sets the static directory as the client directory
//this may change depending on the location of our index.html file
app.use(express.static(path.join(__dirname,'/..')));

//use webpack Middleware to build index.html script
app.use(webpackMiddleware(compiler));

//use routers
app.use('/auth', authRouter);
app.use('/challenge', challengeRouter);

app.listen(3000);
module.exports = app;
