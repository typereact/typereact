import React from 'react';
import ReactDOM from 'react-dom';

let Start = React.createClass ({
  getInitialState: function () {
    return {
    timeStopped: null,
    timeBegan: null,
    stoppedDuration: 0,
    started: null,
    min: '00',
    sec: '00',
    ms:'000'
    };  
  },
  countDown: function () {
    setTimeout(this.startTimer, 3000)
    console.log('counting down')
  },
  startTimer: function () {
    if(this.state.timeBegan === null) {
      // this.state.timeBegan = new Date();
      this.setState({timeBegan: new Date()})
    }
    if(this.state.timeStopped !== null) {
      this.setState({stoppedDuration: this.state.stoppedDuration += (new Date() -this.state.timeStopped)})
    }
    this.setState({started: setInterval(this.clockRunning, 10)})
  }, 
  clockRunning: function() {
    var currentTime = new Date(), 
    timeElapsed = new Date(currentTime-this.state.timeBegan-this.state.stoppedDuration)
    this.setState({
      min: timeElapsed.getUTCMinutes(),
      sec: timeElapsed.getUTCSeconds(),
      ms: timeElapsed.getUTCMilliseconds()
    })

    //work on removing third digit of milliseconds
    this.state.min > 9 ? this.state.min : '0'.toString() + this.state.min;
    this.state.sec > 9 ? this.state.sec : '0' + this.state.sec;
    this.state.ms > 99 ? this.state.ms : this.state.ms > 9 ? '0' + this.state.ms : '00' + this.state.ms;

    this.setState({min: this.state.min});
    this.setState({sec: this.state.sec});
    this.setState({ms: this.state.ms});
    console.log(this.state.min + ' ' + this.state.sec + ' ' + this.state.ms)
  },
  stopTrigger: function () {
    console.log('hi');
  },
  render () {
    return(<div><div>{this.state.min}:{this.state.sec}:{this.state.ms}</div><button onClick={this.countDown}>Start Timer</button></div>)
  }
  // render() {
  //   return(<div><form><input type='text'></input></form></div>)
  // }
});


export default Start;

