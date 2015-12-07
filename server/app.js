import React from "react";
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    return <h1>Hello</h1>
  }
}

ReactDOM.render(<Hello/>, document.getElementById('hello'));
// import Router from "react-router";  
// import { DefaultRoute, Link, Route, RouteHandler } from "react-router";
// import LoginHandler from "../shared/components/login.js";

// let App = React.createClass({  
//   render() {
//     return(
//       <div className="nav">
//         <p> TESTING</p>
//         <Link to="app">Home</Link>
//         <Link to="login">Login</Link>

//         { this is the importTant part }
//         <RouteHandler/>
//       </div>
//     );
//   }
// });

// let routes = (  
//   <Route name="app" path="/" handler={App}>
//     <Route name="login" path="/login" handler={LoginHandler}/>
//   </Route>
// );

// Router.run(routes, function (Handler) {  
//   React.render(<Handler/>, document.body);
// });