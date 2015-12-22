import React from 'react';
import ReactDOM from 'react-dom';
import Codemirror from 'react-codemirror';
require('codemirror/lib/codemirror.css');
require('../css/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/keymap/sublime');
require('codemirror/keymap/emacs');
require('codemirror/keymap/vim');
require('codemirror/addon/edit/closebrackets.js')
var beautify = require('js-beautify').js_beautify

import $ from 'jquery';
import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { stringChanged, incrementCounter, loadChallenge, incrementKeyHandled } from '../actions/actions.js';
import editorApp from '../reducers/reducers.js';
import editDistanceCalculator from '../../editDistanceCalc.js'
// import SolutionEditor from './solutionEditor.js'
// import { Defaults } from './solutionEditor.js';
// import { createStore, combineReducers } from 'redux';

var bindings = {
  'Alt-Left': 0,
  'Alt-Right':0,
  'Ctrl-Alt-Up': 0, //maybe
  'Ctrl-Alt-Down': 0, //maybe
  'Shift-Cmd-L':0, //doesn't work on codemirror + sublime
  'Shift-Tab':0, //doesn't work on codemirror  
  'Cmd-L':0, 
  'Shift-Cmd-K':0, //doesn't work on sublime
  'Cmd-Enter':0,
  'Shift-Cmd-Enter':0,
  'Cmd-D':0,
  'Shift-Cmd-Space':0,
  'Shift-Cmd-M': 0, //doesn't work on sublime
  'Cmd-M':0, //doesn't work on sublime
  'Cmd-Ctrl-Up':0, 
  'Cmd-Ctrl-Down': 0,
  'Cmd-J':0,
  'Shift-Cmd-D': 0,
  'Cmd-T':0, //doesn't work on comdemirror + not sure what it does
  'Alt-Q':0, //doesn't work on codemirror + sublime
  'Cmd-K Cmd-Backspace':0,
  'Cmd-K Cmd-K': 0,
  'Cmd-K Cmd-U':0,
  'Cmd-K Cmd-L':0,
  'Cmd-K Cmd-Space':0, // doesn't work + not sure what it does
  'Cmd-K Cmd-A': 0, // doesn't work + not sure what it does
  'Cmd-K Cmd-W': 0, // doesn't work + not sure what it does
  'Cmd-K Cmd-X' :0, // doesn't work + not sure what it does
  'Cmd-K Cmd-Y': 0, // doesn't work + not sure what it does
  'Cmd-K Cmd-C': 0, //maybe
  'Shift-Alt-Up': 0,
  'Shift-Alt-Down': 0,
}

class Editor extends Component {
    componentDidMount() {
      $.get('/challenge/getChallengeByIndex', this.props.chalID, function(dbChallenge) {
        var differential = editDistanceCalculator(dbChallenge.challengeUnsolved, dbChallenge.challengeSolved)
        this.props.updateChallenge(dbChallenge.challengeUnsolved, dbChallenge.challengeSolved, differential);
      }.bind(this)) 
    }

    componentWillReceiveProps(nextProps) {
      var that = this;
      //when the timeBegan property changes over from null to the start time
      if(this.props.timeBegan === null && nextProps.timeBegan !== null) {
        //focus on the editor; the setTimeout is required otherwise the editor won't gain focus
        setTimeout(function() {
          that.refs.editor.focus();
        }, 1)
      }
    }

    render() {
      // console.log('inside editor component', this.props.code)
        var options = {
            mode: this.props.mode,
            readOnly: this.props.readOnly,
            lineNumbers: true,
            keyMap: this.props.keyMap,
            tabSize: 2,
            showCursorWhenSelecting: true,
            matchBrackets: true,
            autoCloseBrackets: true
        };
        return <div><div id='both-editors'>Your Code</div><Codemirror ref="editor" className="userEditor" value={this.props.code} onChange={this.props.onCodeChange} onkeyPressHandled={this.props.handleKeyPress} onkeyHandled={this.props.handleKey} options={options} /></div>
    }
}

Editor.propTypes = {
  onCodeChange: PropTypes.func,
  code: PropTypes.string,
  mode: PropTypes.string,
  counter: PropTypes.number,
  keyMap: PropTypes.string,
  handleKey: PropTypes.func,
  handleKeyPress: PropTypes.func,
  onStopTimer: PropTypes.func,
  isMatch: PropTypes.bool,
  // readOnly: PropTypes.bool,
  // clockRunning: PropTypes.bool,
  // timeStopped: PropTypes.string,
  // readOnly: PropTypes.string,
  // statusText: PropTypes.string,
};
// Editor.defaultProps = {
//   code: 'for(var i=0;i < array.length;',
//   readOnly: false,
//   mode: 'javascript'
//   isMatch: false,
//   statusText: 'MATCH COMPLETE',
// }

function mapStateToProps(state) {
  return {
    code: state.editorState.code,
    mode: state.editorState.mode,
    counter: state.editorState.counter,
    keyMap: state.editorState.keyMap,
    readOnly: state.editorState.readOnly,
    counter: state.editorState.counter,
    clockRunning: state.editorState.clockRunning,
    timeStopped: state.editorState.timeStopped,
    isMatch: state.editorState.isMatch,
    readOnly: state.editorState.readOnly,
    timeBegan: state.editorState.timeBegan
  }
}


function mapDispatchToProps(dispatch, state) {
  return {
    onCodeChange: function(newCode) {
      var timeStamp = new Date();
      dispatch(stringChanged(newCode, timeStamp));
    },
    handleKey: function() {
      dispatch(incrementKeyHandled());
    },
    handleKeyPress: function(counter) {
      dispatch(incrementCounter());
    },
    updateChallenge: function(unsolved, solved, stringDiff) {
      dispatch(loadChallenge(unsolved, solved, stringDiff));
    },
    test: function () {
      console.log('hello testing')
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
