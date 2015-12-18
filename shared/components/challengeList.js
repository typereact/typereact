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
        console.log('getting challenges: ' + JSON.stringify(response, null, 2));
        this.props.storeChallengeList(response);
      }.bind(this))
    }
  }

  render() {
    var results = this.props.challenges;
    //consider rendering as Bootstrap elements
    return (<ul>
      {results.map(function(result) {
        return <li className='listItem' key={result.id}><a href={'/playchallenge/' + result.id}>{result.challengeName}</a></li>;
      })}
    </ul>)
  }
}

function mapStateToProps(state) {
  return {
    challenges: state.challengeState.challenges,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    storeChallengeList: function(challengeList) {
      dispatch(storeChallenges(challengeList))
    }
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ChallengeList);
