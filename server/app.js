import React from "react";
import ReactDOM from 'react-dom';
import Start from '../shared/components/start.js';
import Editor from '../shared/components/editor.js';
import SolutionEditor from '../shared/components/solutionEditor.js'
import Counter from '../shared/components/counter.js'

import $ from 'jquery';

let App = React.createClass( {
  getInitialState: function () {
    return {
      challengeUnsolved: 'fetching unsolved challenge...',
      challengeSolved: 'fetching solved challenge...'
    }
  },
  componentDidMount: function() {
    $.get('/challenge/getChallenge', function(dbChallenge) {
      this.setState({
        challengeUnsolved: dbChallenge.challengeUnsolved,
        challengeSolved: dbChallenge.challengeSolved
      })
    }.bind(this))    
  },

  render: function() {
    // var alpha = this.
    return <div>
      <a href='auth/github'>Github Auth</a>
      <Counter />
      <p></p>
      <Start/>
      <Editor challengeUnsolved={this.state.challengeUnsolved} challengeSolved={this.state.challengeSolved}/>
      <SolutionEditor challengeSolved={this.state.challengeSolved}/>
    </div>
  }
})

ReactDOM.render(<App/>, document.getElementById('app'));

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