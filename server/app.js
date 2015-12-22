import React from "react";
import ReactDOM from 'react-dom';
import Start from '../shared/components/start.js';
import Editor from '../shared/components/editor.js';
import SolutionEditor from '../shared/components/solutionEditor.js'
import Counter from '../shared/components/counter.js'
import { Component, PropTypes } from 'react';
import Status from '../shared/components/status.js';
import EditorOptions from '../shared/components/editorOptions.js';
import GameProgress from '../shared/components/progressBar.js';
import { connect } from 'react-redux';
import Countdown from '../shared/components/countdown.js'
// import ReactCountdownClock from 'react-countdown-clock';
// var ReactCountdownClock = require('react-countdown-clock/build/react-countdown-clock.js');
// require('../shared/css/codemirror.css')
// require('../shared/css/styles.css');
import PostData from '../shared/components/postData.js';


import $ from 'jquery';



export default class App extends Component {
  render() {
    return <div>
      <Countdown />
      <Start />
      <GameProgress /> 
      <div id='editors'>
      <Editor chalID={this.props.params.challengeID}/>
      <SolutionEditor/>
      </div>
      <Counter />
      <PostData chalID={this.props.params.challengeID} />
      <EditorOptions />
      <div>{this.props.children}</div>
    </div>
  }
}
      // <Status />
