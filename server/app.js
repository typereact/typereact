import React from "react";
import ReactDOM from 'react-dom';
import Login from '../shared/components/login.js';
import Editor from '../shared/components/editor.js';

class App extends React.Component {
  render() {
    return <div>
    <div id='login'></div>
    <div id='editor'></div>
    </div>
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
ReactDOM.render(<Login/>, document.getElementById('login'));
ReactDOM.render(<Editor/>, document.getElementById('editor'));

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