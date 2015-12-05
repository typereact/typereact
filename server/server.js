var express = require('express');
var path = require('path');
var bodyParser  = require('body-parser');
var app = express();
//requires file that connects to database
var db = require('./database/dbconfig.js');

app.use(bodyParser.json());

//sets the static directory as the client directory
//this may change depending on the location of our index.html file
app.use(express.static(path.join(__dirname,'/../client')));

app.listen(3000);
module.exports = app;
