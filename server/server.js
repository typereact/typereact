var express = require('express');
var React = require('react');
var Router = require('react-router');
var path = require('path');
var passport = require('passport');
var session = require('express-session');
var GitHubStrategy = require('passport-github2').Strategy;
var bodyParser  = require('body-parser');
var app = express();
var db = require('./database/dbconfig.js');
var User = db.User;


var routes from "../shared/routes";

var authRouter = require('./routers/authRouter.js')(express, passport, User, GitHubStrategy);

app.use(bodyParser.json());
app.use(session({ secret: 'typereact secret' }));
app.use(passport.initialize());
app.use(passport.session());

//sets the static directory as the client directory
//this may change depending on the location of our index.html file
app.use(express.static(path.join(__dirname,'/../client')));

app.use('/auth', authRouter);

app.listen(3000);
module.exports = app;
