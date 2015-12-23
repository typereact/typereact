import React from 'react';
import ReactDOM from 'react-dom';
// import ProgressBar from 'react-bootstrap/lib/ProgressBar.js';
import { Component } from 'react';
import { connect } from 'react-redux';
import editorApp from '../reducers/reducers.js';
import editDistanceCalculator from '../../editDistanceCalc.js'

class GameProgress extends Component {
  
  render() {
    var totalChanges = this.props.editDistance
    var changesToGo = Math.min(editDistanceCalculator(this.props.code, this.props.solvedCode), totalChanges);
    var percentProgress = Math.round(((totalChanges - changesToGo) / totalChanges) * 100);
    var barColor;
    if(percentProgress > 75) {
      barColor = 'green';
    } else if (percentProgress > 50) {
      barColor = 'yellow'
    } else if (percentProgress > 25) {
      barColor = 'orange'
    } else {
      barColor = "red";
    }
    var divStyle = {
      width: percentProgress.toString()+'%',
      backgroundColor: barColor,
      color: 'black',
    }
    return <div className="container">
        <div className="col-sm-6 col-sm-offset-3">
          Current Progress: {percentProgress} %
          <div className='progress'>
            <div className='progress-bar progress-bar-striped active'
              role='progressbar'
              aria-valuemin='0'
              aria-valuemax='100'
              style={divStyle}>
            </div>
          </div>
        </div>
      </div>
  }
}
    // return <div id='progress-bar'>Current Progress: {percentProgress}%<ProgressBar active now={percentProgress} /></div>

function mapStateToProps(state) {
  return {
    code: state.editorState.code,
    solvedCode: state.editorState.solvedCode,
    editDistance: state.editorState.editDistance
  }
}

export default connect(mapStateToProps)(GameProgress);
