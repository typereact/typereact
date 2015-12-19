import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateTopFiveTimes} from '../actions/actions.js';
import editorApp from '../reducers/reducers.js';
import $ from 'jquery';

export default class TopFive extends Component {

  componentDidMount() {
    var topFiveArr = [];
    var that = this;
    $.get('/userchallenge/topFive', this.props.params.challengeID, function(topFiveFromDatabase) {
        console.log(topFiveFromDatabase)
        topFiveArr = topFiveFromDatabase;
        // this.props.updateTopFiveTimes(topFive);    
      }.bind(this)).then(function() {
        var counter = 0;
        topFiveArr.forEach(function(score, rankIndex) {
          $.get('/user/find', score.userID.toString(), function(userInfo) {
            score.name = userInfo.githubName;
            score.pic = userInfo.githubProfile;
            counter++;
            if(counter === topFiveArr.length) {
              console.log('user info',JSON.stringify(userInfo));
              console.log(topFiveArr);
              that.props.updateTopFiveTimes(topFiveArr);
            }
          })
        })
      }) 
  }

  render() {
    var topFiveTimes = this.props.topFiveTimes;
    console.log('top five times',topFiveTimes)
    return (<ul>
      {topFiveTimes.map(function(topFiveItem, index) {
        return <li className='listItem' key={topFiveItem.id}>{index + 1}. {topFiveItem.timeToComplete} seconds. By: {topFiveItem.name}</li>;
      })}
    </ul>)
  }
};

TopFive.propTypes = {
  topFiveTimes: PropTypes.array,
  topFiveKeyStrokes: PropTypes.array,
  updateTopFiveTimes: PropTypes.func
}

function mapStateToProps(state) {
  return {
    topFiveTimes: state.challengeState.topFiveTimes,
    topFiveKeyStrokes: state.challengeState.topFiveKeyStrokes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateTopFiveTimes: function(arr) {
      dispatch(updateTopFiveTimes(arr));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopFive);
