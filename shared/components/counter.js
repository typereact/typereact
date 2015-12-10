import React from 'react';
import ReactDOM from 'react-dom';
import { ShowCounter } from './editor.js';

let Counter = React.createClass ({
  render() {
    return <div><h1>{ShowCounter}</h1></div>
  }
});
  // console.log('showcounter is ' + ShowCounter)

export default Counter;