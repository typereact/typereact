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
import { updateSolvedCode, updateUnsolvedCode } from '../actions/actions.js'; //UPDATE as needed.
import editorApp from '../reducers/reducers.js';   //UPDATE as needed.

class AddChallenge extends Component {
  postChallenge (props) {
    // data needs to match challengeController
    var data = {
      challengeUnsolved: this.props.codeSolved,
      challengeSolved: this.props.codeUnsolved,
      challengeName: 'challengeName',
      challengeCategory: 'javascript',
      challengeInstructions: 'do your best',
      difficultyLevel: 'hard',
      goldMedalTime: 10,
      silverMedalTime: 20,
      bronzeMedalTime: 30,
      goldKeyStrokes: 10,
      silverKeyStrokes: 20,
      bronzeKeyStrokes: 30,
      numPlays: 0,
      numRatings: 0,
      totalRatingScore: 0
    };
    console.log(data);
    $.ajax({
      type: "POST",
      url: '/challenge/postChallenge',
      data: JSON.stringify(data),
      success: function() {console.log('challenge saved to db')},
      contentType: 'application/json'
    });

  }
  render() {
    var props = this.props;
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
      autoCloseBrackets: true,
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
        <button id='save-challenge' onClick={ () => {this.postChallenge(props)} }>Save Challenge</button>
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
      dispatch(updateSolvedCode(newCode));
    },
    onUnsolvedCodeChange: function(newCode) {
      dispatch(updateUnsolvedCode(newCode));
    },
    onSaveChallenge: function () {
      // setup for future use
      // dispatch(some_action);
    },
    handleKey: function(newCode) {
      // this handler just needs to exist. 
      // console.log('handleKey');
    },
    handleKeyPress: function(newCode) {
      // this handler just needs to exist. 
      // console.log('handleKeyPress');
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddChallenge);