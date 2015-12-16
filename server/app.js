import React from "react";
import ReactDOM from 'react-dom';
import Start from '../shared/components/start.js';
import Editor from '../shared/components/editor.js';
import SolutionEditor from '../shared/components/solutionEditor.js'
import Counter from '../shared/components/counter.js'
import { Component, PropTypes } from 'react';
import Status from '../shared/components/status.js';
import EditorOptions from '../shared/components/editorOptions.js';
import { stringChanged, checkUser } from '../shared/actions/actions.js';
import Navbar from '../shared/components/navbar.js'
import { connect } from 'react-redux';


import $ from 'jquery';

// REFACTOR THE FOLLOWING SECTION
// let App = React.createClass( {
//   getInitialState: function () {
//     return {
//       challengeUnsolved: 'fetching unsolved challenge...',
//       challengeSolved: 'fetching solved challenge...'
//     }
//   },
//   componentDidMount: function() {
//     $.get('/challenge/getChallenge', function(dbChallenge) {
//       this.setState({
//         challengeUnsolved: dbChallenge.challengeUnsolved,
//         challengeSolved: dbChallenge.challengeSolved
//       })
//     }.bind(this))    
//   },


export default class App extends Component {
  componentDidMount() {
    $.get('/isLoggedIn', function(response) {
      console.log('response from the deeb: ' + JSON.stringify(response));
      var loggedIn = Boolean(response);
      var username = response.username || 'Guest';
      var pic = response.githubProfile || null;
      this.props.storeUser(loggedIn, username, pic);
    }.bind(this))
  }
  render() {
    console.log('rendering app' + JSON.stringify(this.props));
    // injected by connect() call:
    // const { dispatch, statusText, isMatch, code, readOnly, mode } = this.props;
    return <div>
      <Navbar />
      <Start />
      <Status />
      <Counter />
      <EditorOptions />
      <Editor />
      <br></br>
      <SolutionEditor challengeSolved={this.props.challengeSolved} />
    </div>
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    isLoggedIn: state.loggedInState.loggedIn,
  }
}


function mapDispatchToProps(dispatch) {
  return {
    storeUser: function(loggedIn, username, picture) {
      dispatch(checkUser(loggedIn, username, picture));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// ReactDOM.render(<App store={store}/>, document.getElementById('app'));

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


