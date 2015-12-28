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
import { updateSolvedCode, updateUnsolvedCode, updateField } from '../actions/actions.js'; //UPDATE as needed.
import editorApp from '../reducers/reducers.js';   //UPDATE as needed.

class AddChallenge extends Component {
  postChallenge (props) {
    var data = {
      challengeUnsolved: this.props.codeUnsolved,
      challengeSolved: this.props.codeSolved,
      challengeName: this.refs.challengeName.value.trim(),
      challengeCategory: 'javascript',
      challengeInstructions: this.refs.challengeInstructions.value.trim(),
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
    // console.log('code solved state is ' + this.props.codeSolved);
    return <div>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-5">
        Make this code...
        </div>
        <div className="col-md-5">
        Look like this code
        </div>
        <div className="col-md-1"></div>
      </div>

      <div id="editors" className="row">
        <div className="col-md-1"></div>
        <div id="add-unsolved-challenge" className="col-md-5" >
          <Codemirror ref="editorAddUnsolved" className="editorAddUnsolved" value={this.props.codeUnsolved} options={optionsUnsolved} onChange={this.props.onUnsolvedCodeChange} onkeyPressHandled={this.props.handleKeyPress} onkeyHandled={this.props.handleKey} />
        </div>
        <div className="col-sm-.5"></div>
        <div id="add-solved-challenge" className="col-md-5" >
          <Codemirror ref="editorAddSolved" className="editorAddSolved" value={this.props.codeSolved} options={optionsSolved} onChange={this.props.onSolvedCodeChange} onkeyPressHandled={this.props.handleKeyPress} onkeyHandled={this.props.handleKey} />
        </div>
        </div>

      <div id="challenge-form-fields" className="row buffer-bottom" >
        <br />
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <input type="text" className="resized-textbox form-group" ref="challengeName" id="form-field-challenge-name" placeholder="Challenge Name" />
          <textarea ref="challengeInstructions" id="form-field-challenge-instructions" placeholder="Challenge Instructions" className="form-control form-group" rows="3" ></textarea>
          <button className="btn btn-default" id="save-challenge" onClick={ () => {this.postChallenge(props)} }>Save Challenge</button>
        </div>
      </div>

    </div>
  }
}
      // <form onSubmit={ () => {this.postChallenge(props)} }>
      //   <input className="btn btn-default" id='submit' type="submit" value="Save Challenge" />
      // </form>
        // <input type="text" ref="challengeName" value={this.props.challengeName} onChange={this.props.onFieldChange} />

AddChallenge.PropTypes = {
  onSaveChallenge: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    codeSolved: state.addChallengeState.codeSolved,
    codeUnsolved: state.addChallengeState.codeUnsolved,
    challengeName: state.addChallengeState.challengeName,
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
    onFieldChange: function(newText) {
      // this function is not working with input box as intended
      dispatch(updateField(newText));
    },
    onSaveChallenge: function () {
      // setup for future use
      // console.log('inside onSaveChallenge');
      // dispatch(some_action);
    },
    handleKey: function(newCode) {
      // known issue: this handler just needs to exist.
    },
    handleKeyPress: function(newCode) {
      // known issue: this handler just needs to exist.
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddChallenge);