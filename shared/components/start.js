import React from 'react';
import ReactDOM from 'react-dom';
import editorApp from '../reducers/reducers.js';
import { connect } from 'react-redux';
import { countDown, countDownBySecond, startTimer, stopTimer, clockRunning, settingInterval, clockStop } from '../actions/actions.js';
import { PropTypes } from 'react';
import thunk from 'redux-thunk';


let Start = React.createClass ({
  // getInitialState: function () {
  //   return {
  //   timeStopped: null,
  //   timeBegan: null,
  //   stoppedDuration: 0,
  //   started: null,
  //   min: '0',
  //   sec: '0',
  //   ms:'0',
  //   countdown: 3
  //   };  
  // },
  // countDown: function () {
  //   setTimeout(this.props.oncountDownBySecond, 1000)
  //   console.log('counting down')
  // },
  // countDownBySecond: function () {
  //   if(this.state.countdown === 0){
  //     this.startTimer();
  //   } else {
  //     this.setState({countdown: this.state.countdown-1});
  //     this.countDown();
  //   }
  // },
  // startTimer: function () {
  //   if(this.state.timeBegan === null) {
  //     // this.state.timeBegan = new Date();
  //     this.setState({timeBegan: new Date()})
  //   }
  //   if(this.state.timeStopped !== null) {
  //     this.setState({stoppedDuration: this.state.stoppedDuration += (new Date() -this.state.timeStopped)})
  //   }
  //   this.setState({started: setInterval(this.clockRunning, 10)})
  // }, 
  // clockRunning: function() {
  //   var currentTime = new Date(), 
  //   timeElapsed = new Date(currentTime-this.state.timeBegan-this.state.stoppedDuration)
  //   this.setState({
  //     min: timeElapsed.getUTCMinutes(),
  //     sec: timeElapsed.getUTCSeconds(),
  //     ms: timeElapsed.getUTCMilliseconds()
  //   })

  //   //work on removing third digit of milliseconds
  //   console.log(this.state.min + ' ' + this.state.sec + ' ' + this.state.ms)
  // },
  // stopTrigger: function () {
  //   this.setState({timeStopped: new Date()});
  //   clearInterval(this.state.started);
  // },
  render () {
    return(<div>
      <div>COUNTDOWN: {this.props.countdown}</div>
      <button onClick={this.props.onStartTimer}>Start Timer</button>
      <button onClick={this.props.onStopTimer}>Stop Timer</button>
      <div>{this.props.min > 9 ? this.props.min : '0' + this.props.min}:{this.props.sec > 9 ? this.props.sec : '0' + this.props.sec}:{this.props.ms > 99 ? this.props.ms : this.props.ms > 9 ? '0' + this.props.ms : '00' + this.props.ms}</div>
      </div>
      )
  }
});
      // <div>{this.state.min > 9 ? this.state.min : '0' + this.state.min}:{this.state.sec > 9 ? this.state.sec : '0' + this.state.sec}:{this.state.ms > 99 ? this.state.ms : this.state.ms > 9 ? '0' + this.state.ms : '00' + this.state.ms}</div>
      // <Timer />

  // let Timer = React.createClass({
  //   render() {
  //     return (
  //       <div>{this.props.sec} hello</div>
  //         <div>{this.props.min > 9 ? this.props.min : '0' + this.props.min}:{this.props.sec > 9 ? this.props.sec : '0' + this.props.sec}:{this.props.ms > 99 ? this.props.ms : this.props.ms > 9 ? '0' + this.props.ms : '00' + this.props.ms}</div>
  //       )
  //   }
  // })

Start.propTypes = {
  onCountDown: PropTypes.func,
  onCountDownBySecond: PropTypes.func,
  onStartTimer: PropTypes.func,
  onStopTimer: PropTypes.func,
  countdown: PropTypes.number,
  min: PropTypes.string,
  sec: PropTypes.string,
  ms: PropTypes.string
}

// Timer.propTypes = {
// }

function mapStateToProps(state) {
  return {
    timeStopped: state.timerState.timeStopped,
    timeBegan: state.timerState.timeBegan,
    stoppedDuration: state.timerState.stoppedDuration,
    started: state.timerState.started,
    min: state.timerState.min,
    sec: state.timerState.sec,
    ms: state.timerState.ms,
    countdown: state.timerState.countdown,
    clockRunning: state.timerState.clockRunning
  }
}
function mapDispatchToProps(dispatch, state) {
  return {
    // onClockRunning: function () {
    //   console.log('setting interval onclockrunning')
    //   var currentTime = new Date()
    //   var timeElapsed = new Date(currentTime-state.timeBegan-state.stoppedDuration) 
    //   dispatch(clockRunning(timeElapsed))
    // },
    onStartTimer: function () {
      var timeStamp = new Date();
      dispatch(startTimer(timeStamp));
      var intervals = setInterval(function () {
        dispatch(clockRunning());
      }, 10);
      dispatch(settingInterval(intervals));
    },
    onStopTimer: function () {
    // let currentState = getState();
    // console.log('currentState is ', currentState)
      var timeStamp = new Date();
      dispatch(stopTimer(timeStamp));
      // dispatch(clockStop);
    },
    onCountDown: function () {
      dispatch(countDown());
    },
    onCountDownBySecond: function () {
      dispatch(countDownBySecond());
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Start)

