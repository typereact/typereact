import React from 'react';
import { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';
// import editorApp from '../reducers/reducers.js';
// import $ from 'jquery';

export default class FAQs extends Component {

  render() {
    
    return (
      <div className="container">
        <h3>FAQs</h3>
        <div className="row row-spacer"></div>
        <h4>How do I play TypeReact?</h4>
        <h6>When playing a TypeReact "Challenge", you will notice there are two pre-populated code editors. Your goal is to make the two
        code editors match. You are only allowed to edit the code editor on the left. (No copy paste allowed!)</h6>
        <div className="row row-spacer"></div>
        <h4>How do I win?</h4>
        <h6>The goal is to complete each challenge as fast as possible and using as few keystrokes as possible. The top 25 performers on each challenge will make the "Challenge" leaderboard.</h6>
        <div className="row row-spacer"></div>
        <h4>What shortcut keys can I use?</h4>
        <h6>We currently support the standard shortcut key bindings for Sublime, Vim, and Emacs. You may choose your preferred text editor on the challenge page. Also, you can refer to the Cheatsheets link on the NavBar for a listing of shortcut key bindings for Sublime, Vim, and Emacs.</h6>
        <div className="row row-spacer"></div>
        <h4>What is the difference between logging in and playing as a guest?</h4>
        <h6>If you log in, you will be able to view your historical challenge statistics and can also appear on the challenge leaderboards.</h6>
        <div className="row row-spacer"></div>
        <h4>I would like to report a problem or make a suggestion about TypeReact. What is the best way to do so?</h4>
        <h6>Please feel free to let us know if you found any bugs or would like to make any suggestions. Issues/suggestions can be reported on our GitHub page linked below.</h6>
        <h6><a href="https://github.com/typereact/typereact/issues">Report a problem</a></h6>
        <div className="row row-spacer"></div>
        <h4>I want to submit my own challenge. How can I do so?</h4>
        <h6>We are currently developing the feature for users to easily submit challenges. </h6>      
      </div>
    );
  }

}