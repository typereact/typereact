import React from "react";
import ReactDOM from 'react-dom';
import { Component } from 'react';
import ReactCountdownClock from 'react-countdown-clock';

export default class countDown extends Component {
  render() {
    return <div className='countdown-clock'></div>
  }
}
  // <div className='countdown-clock'><ReactCountdownClock seconds={5}
  //                    color="#a9b7c0"
  //                    alpha={0.9}
  //                    size={200} /></div>

// mapStateToProps = function () {
//   clock: state.countdownState.clock;
// }