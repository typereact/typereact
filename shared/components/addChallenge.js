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
import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import { updateCode } from '../actions/actions.js'; //UPDATE as needed.
import editorApp from '../reducers/reducers.js';   //UPDATE as needed.

class AddChallenge extends Component {
  postChallenge (props) {
    // data needs to match challengeController
    var data = {
      challengeUnsolved: req.body.challengeUnsolved,
      challengeSolved: req.body.challengeSolved,
      // below are optional from db standpoint?
      challengeName: challengeName,
      challengeCategory: challengeCategory,
      challengeInstructions: challengeInstructions,
      challengeSubmittedByID: challengeSubmittedByID, // number
      difficultyLevel: req.body.difficultyLevel, // string
      goldMedalTime: req.body.goldMedalTime,  // number
      silverMedalTime: req.body.silverMedalTime, // number
      bronzeMedalTime: req.body.bronzeMedalTime, // number

    };

    $.ajax({
      type: "POST",
      url: '/challenge/postChallenge',
      data: JSON.stringify(data),
      success: function() {console.log('challenge saved to db')},
      contentType: 'application/json'
    });

  }
  render() {
    // var props = this.props;
    var optionsSolved = {
      mode: 'javascript',
      readOnly: false,
      lineNumbers: true,
      keyMap: 'sublime',
      tabSize: 2,
      showCursorWhenSelecting: true,
      matchBrackets: true,
      autoCloseBrackets: true
    };
    var optionsUnsolved = {
      mode: 'javascript',
      readOnly: false,
      lineNumbers: true,
      keyMap: 'sublime',
      tabSize: 2,
      showCursorWhenSelecting: true,
      matchBrackets: true,
      autoCloseBrackets: true
    };
    console.log('code solved state is ' + this.props.codeSolved);
    console.log('unsolved code state is ' + this.props.codeUnsolved);
    return <div>
      <div id="add-solved-challenge">
        <Codemirror ref="editorAddSolved" className="editorAddSolved" value={this.props.codeSolved} options={optionsSolved} onChange={this.props.onSolvedCodeChange} onkeyPressHandled={this.props.handleKeyPress} onkeyHandled={this.props.handleKey} />
      </div>
      <div id="add-unsolved-challenge">
        <Codemirror ref="editorAddUnsolved" className="editorAddUnsolved" value={this.props.codeUnsolved} options={optionsUnsolved} onChange={this.props.onUnsolvedCodeChange} onkeyPressHandled={this.props.handleKeyPress} onkeyHandled={this.props.handleKey} />
      </div>
      <div>
        <button id='save-challenge' onClick={this.props.onSaveChallenge}>Save Challenge</button>
      </div>
    </div>
  }
}

AddChallenge.PropTypes = {
  onSaveChallenge: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    codeSolved: state.addChallengeState.codeSolved,
    codeUnsolved: state.addChallengeState.codeUnsolved,
  }
}

function mapDispatchToProps(dispatch, getState, state) {
  return {
    onSolvedCodeChange: function(newCode) {
      dispatch(updateCode(newCode));
    },
    onUnsolvedCodeChange: function(newCode) {
      dispatch(updateCode(newCode));
    },
    onSaveChallenge: function () {
      dispatch(some_action);
    },
    handleKey: function(newCode) {
      // dispatch(incrementKeyHandled());
      // dispatch(updateCode(newCode));
      console.log('handleKey');
    },
    handleKeyPress: function(newCode) {
      // dispatch(incrementCounter());
      // dispatch(updateCode(newCode));
      console.log('handleKeyPress');
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddChallenge);