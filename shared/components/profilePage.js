import React from "react";
import ReactDOM from 'react-dom';
import { Component, PropTypes } from 'react';
import CompletedChallenges from './completedChallenges.js';
import { connect } from 'react-redux';

class profilePage extends Component {
  render () {
    return <div>
    <div id='profile-pic'><img src={this.props.profilePic} /></div>
    <CompletedChallenges />
    </div>
  }
}


profilePage.PropTypes = {
  profilePic: PropTypes.string
};

function mapStateToProps(state) {
  return {
    profilePic: state.loggedInState.profilePic
    }
}

export default connect(mapStateToProps)(profilePage)