import React from "react";
import ReactDOM from 'react-dom';
import { Component, PropTypes } from 'react';
import editorApp from '../reducers/reducers.js';
import { connect } from 'react-redux';

class completedChallengesTable extends Component {
  render() {
    return this.props.dropDownDisplay === 'Completed Challenges' ? <div></div> : 
    <div>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Ranking</th>
            <th>Keystroke</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {this.props.keyStrokeTable.map(function(result) {
            return (
              <tr>
              <td>{result.ranking}</td>
              <td>{result.key}</td>
              <td>{result.time}</td>
              </tr>
              )
          })}
        </tbody>
      </table>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    dropDownDisplay: state.profilePageState.dropDownDisplay,
    keyStrokeTable: state.profilePageState.keyStrokeTable
  }
}

export default connect(mapStateToProps)(completedChallengesTable)

