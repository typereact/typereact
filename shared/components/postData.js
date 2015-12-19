import React from 'react';
import ReactDOM from 'react-dom';
import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { storeResults } from '../actions/actions.js'; //UPDATE as needed.
import editorApp from '../reducers/reducers.js';   //UPDATE as needed.
import $ from 'jquery';

class PostData extends Component {
  postResults(props) {
    var userID = props.currentUserId;
    var challengeID = Number(this.props.chalID);
    var numKeyStrokes = props.counter;
    // time conversion to seconds (input is a string)
    var totalMin = props.min*60;
    var total = totalMin + props.sec + '.' + props.ms;
    var timeToComplete = Number(parseFloat(total).toFixed(2));

    var data = {
      userID: userID,
      challengeID: challengeID,
      numKeyStrokes: numKeyStrokes,
      timeToComplete: timeToComplete
    };

    $.ajax({
      type: "POST",
      url: '/testurl',
      data: JSON.stringify(data),
      success: function() {console.log('results saved to db')},
      contentType: 'application/json'
    });
  }

  render() {
    var props = this.props;
    if (this.props.isMatch) {
      this.postResults(props)
    }
    return(
      <div>
      <div id="test-is-match" style= {{display: this.props.isMatch ? '' : 'none'}}> This should appear on match </div>
      <button id="post-it" onClick={ () => {this.postResults(props)} } style= {{visibility: this.props.isMatch ? '' : 'hidden'}}>Save Results</button>
      </div>
      )
  }

}

PostData.PropTypes = {
  isMatch: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    isMatch: state.editorState.isMatch,
    counter: state.editorState.counter,
    timeBegan: state.editorState.timeBegan,
    timeStopped: state.editorState.timeStopped,
    min: state.editorState.min,
    sec: state.editorState.sec,
    ms: state.editorState.ms,
    user: state.loggedInState.user,
    currentUserId: state.loggedInState.currentUserId,
  }
}

function mapDispatchToProps(dispatch, getState, state) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostData);