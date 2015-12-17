import React from "react";
import ReactDOM from 'react-dom';
import Start from '../shared/components/start.js';
import Editor from '../shared/components/editor.js';
import SolutionEditor from '../shared/components/solutionEditor.js'
import Counter from '../shared/components/counter.js'
import { Component, PropTypes } from 'react';
import Status from '../shared/components/status.js';
import EditorOptions from '../shared/components/editorOptions.js';
import { connect } from 'react-redux';


import ReactCountdownClock from 'react-countdown-clock';
import $ from 'jquery';

export default class App extends Component {
  render() {
    return <div>
      <Start />
      <Status />
      <Counter />
      <EditorOptions />
      <Editor />
      <br></br>
      <SolutionEditor challengeSolved={this.props.challengeSolved} />
      <div>{this.props.children}</div>
    </div>
  }
}
