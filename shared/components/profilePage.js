import React from 'react';
import ReactDOM from 'react-dom';
import { Component, PropTypes } from 'react';
import CompletedChallenges from './completedChallenges.js';
import CompletedChallengesTable from './completedChallengesTable.js';
import OrderOptions from './orderOptions.js';
import { connect } from 'react-redux';

class profilePage extends Component {
  render () {
    return (
      <div>
      <div className='col-md-2'></div>

      <div className='col-md-8 main-container'>

        <div className='row'>
          <img className='profile-pic' src={this.props.profilePic} />
        </div>

        <div className='row challenge-order'>
          <div className='col-md-2'></div>
          <div className='col-md-4'>
            <CompletedChallenges />
          </div>
          <div className='col-md-4'>
            <OrderOptions />
          </div>
          <div className='col-md-2'></div>
        </div>

        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-8'>
          <CompletedChallengesTable />
          </div>
          <div className='col-md-2'></div>
        </div>
        
      </div>
      <div className='col-md-2'></div>
    </div>
    )
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