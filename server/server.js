var express = require('express');
var React = require('react');
var Router = require('react-router');
var path = require('path');
var bodyParser  = require('body-parser');
var app = express();
//requires file that connects to database
var db = require('./database/dbconfig.js');

app.use(bodyParser.json());

//sets the static directory as the client directory
//this may change depending on the location of our index.html file
app.use(express.static(path.join(__dirname,'/../client')));

var routes from "../shared/routes";

// app.get('/*', function (req, res) {  
//   Router.run(routes, req.url, Handler => {
//     let content = React.renderToString(<Handler />);
//     res.render('index', { content: content });
//   });
// });

app.listen(3000);
module.exports = app;
