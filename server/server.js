var express = require('express');
var React = require('react');
var Router = require('react-router');
var passport = require('passport');
var session = require('express-session');
var GitHubStrategy = require('passport-github2').Strategy;
var path = require('path');
var bodyParser  = require('body-parser');
var app = express();
//requires file that connects to database
var db = require('./database/dbconfig.js');
var authRouter = express.Router();
var User = db.User;


var routes from "../shared/routes";


app.listen(3000);
module.exports = app;
