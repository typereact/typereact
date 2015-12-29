import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { connect } from 'react-redux';
import { Component, PropTypes } from 'react';
import editorApp from '../reducers/reducers.js';
import { storeChallenges } from '../actions/actions.js';

class ChallengeList extends Component {

  componentDidMount() {
    if (this.props.challenges.length === 0) {
      $.get('/challenge/getAllChallenges', function(response) {
        // console.log('getting challenges: ' + JSON.stringify(response, null, 2));
        this.props.storeChallengeList(response);
      }.bind(this));
    }
  }

  render() {
    var results = this.props.challenges;
    //consider rendering as Bootstrap elements
    return (
      <div className="container">
        <div className="table">
          <h4>Please select a challenge to play</h4>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Link</th>
                <th>Difficulty</th>
                <th>Number of Plays</th>
                <th>Leaderboard</th>
              </tr>
            </thead>
            <tbody>
              {results.map(function(result) {
                return (<tr key={result.id}>
                  <th><a href={'/playchallenge/' + result.id}>{result.challengeName}</a></th>
                  <th>{result.difficultyLevel}</th>
                  <th>{result.numPlays}</th>
                  <th><a href={'/results/' + result.id}>View Leaderboard</a></th>
                </tr>);
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    challenges: state.challengeState.challenges
  };
}

function mapDispatchToProps(dispatch) {
  return {
    storeChallengeList: function(challengeList) {
      dispatch(storeChallenges(challengeList));
    }
  };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ChallengeList);
