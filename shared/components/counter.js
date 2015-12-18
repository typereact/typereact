import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { stringChanged, incrementCounter } from '../actions/actions.js';
import editorApp from '../reducers/reducers.js';

class Counter extends Component {
  render() {
    return <div id='counter'><h4>keystrokes: {this.props.counter}</h4></div>
  }
};

Counter.propTypes = {
  counter: PropTypes.number
}

function mapStateToProps(state) {
  return {
    code: state.editorState.code,
    counter: state.editorState.counter
  }
}

export default connect(mapStateToProps)(Counter);