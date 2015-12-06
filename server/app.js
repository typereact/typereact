import React from "react";
import Router from "react-router";  
import { DefaultRoute, Link, Route, RouteHandler } from "react-router";
// var React = require('react');
// var Router = require('react-router');
// var DefaultRoute = require('react-router').Route
// var Link = require('react-router').Link
// var Route =require('react-router').Route
// var RouteHandler = require('react-router').RouteHandler


// var LoginHandler = require('../shared/components/login.js');
import LoginHandler from "../shared/components/login.js";

let App = React.createClass({  
  render() {
    return(
      <div className="nav">
        <p> TESTING</p>
        <Link to="app">Home</Link>
        <Link to="login">Login</Link>

        {/* this is the importTant part */}
        <RouteHandler/>
      </div>
    );
  }
});

let routes = (  
  <Route name="app" path="/" handler={App}>
    <Route name="login" path="/login" handler={LoginHandler}/>
  </Route>
);

Router.run(routes, function (Handler) {  
  React.render(<Handler/>, document.body);
});