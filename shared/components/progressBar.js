import React from 'react';
import ReactDOM from 'react-dom';
import ProgressBar from 'react-bootstrap/lib/ProgressBar.js';
import { Component } from 'react';

export default class GameProgress extends Component {
  render() {
  return <div id='progress-bar'><ProgressBar active now={45} /></div>
  }
}
    // return <div>HELLO</div>

// export default GameProgress;