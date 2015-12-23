import React from 'react';
import ReactDOM from 'react-dom';
import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { storeResults } from '../actions/actions.js'; //UPDATE as needed.
import editorApp from '../reducers/reducers.js';   //UPDATE as needed.
import $ from 'jquery';
import Modal from 'react-bootstrap/lib/Modal.js';
import Button from 'react-bootstrap/lib/Button.js';

class PostData extends Component {
  postResults(props) {
    console.log(props)
    var userID = this.props.currentUserId;
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
      url: '/userchallenge/postuserchallenge',
      data: JSON.stringify(data),
      success: function() {console.log('results saved to db')},
      contentType: 'application/json'
    });
  }

  render() {
    var props = this.props;
    // console.log(this.props)
    if (this.props.isMatch && !this.props.hasPosted) {
      this.postResults(props)
    }
    return(
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg" show={this.props.lgShow} onHide={this.props.hideCheatSheet}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg"><strong>TEST</strong></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>test</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.hideCheatSheet}>Close</Button>
        </Modal.Footer>
      </Modal>
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
    min: state.editorState.min,
    sec: state.editorState.sec,
    ms: state.editorState.ms,
    user: state.loggedInState.user,
    currentUserId: state.loggedInState.currentUserId,
    hasPosted: state.editorState.hasPosted,
    lgShow: state.loggedInState.bool,
  }
}

function mapDispatchToProps(dispatch, getState, state) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostData);