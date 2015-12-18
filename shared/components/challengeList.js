import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { connect } from 'react-redux';
import { Component, PropTypes } from 'react';
import editorApp from '../reducers/reducers.js';

class ChallengeList extends Component {
  render() {
    var results = this.props.challenges;
    //consider rendering as Bootstrap elements
    return (<ul>
      {results.map(function(result) {
        return <li className='listItem' key={result.id}><a href={'/playchallenge/' + result.id}>{result.challengeInstructions}</a></li>;
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
  return {}
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ChallengeList);
