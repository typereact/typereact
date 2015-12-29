import React from 'react';
import ReactDOM from 'react-dom';
import { Component, PropTypes } from 'react';
import CompletedChallenges from './completedChallenges.js';
import { connect } from 'react-redux';

class profilePage extends Component {
  render () {
    return <div>
    <div className='row'>
      <div className='col-md-2'></div>
      <div className='col-md-8 main-container'>
      <img className='profile-pic' src={this.props.profilePic} />
      <div className='row'>
      <CompletedChallenges />
      </div>
      </div>
      <div className='col-md-2'></div>
    </div>

    </div>;
  }
}


profilePage.PropTypes = {
  profilePic: PropTypes.string
};

function mapStateToProps(state) {
  return {
    profilePic: state.loggedInState.profilePic
  };
}

export default connect(mapStateToProps)(profilePage);