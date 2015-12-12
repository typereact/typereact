import React from 'react';
import ReactDOM from 'react-dom';
import Codemirror from 'react-codemirror';
require('codemirror/lib/codemirror.css');
require('../css/codemirror.css')
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/keymap/sublime');
var beautify = require('js-beautify').js_beautify;

let SolutionEditor = React.createClass({
  getInitialState: function() {
    return {
      code: this.props.challengeSolved,
      readOnly: 'nocursor',
      mode: 'javascript'
    };
  },
  componentWillReceiveProps: function(nextProps) {
    this.setState({
      code: beautify(nextProps.challengeSolved, {indent_size: 2})
    })
  },
  render: function() {
    var options = {
      lineNumbers: true,
      mode: this.state.mode,
      readOnly: this.state.readOnly,
    };
    return <Codemirror ref="solutionEditor" value={this.state.code} options={options} />
  }
});

export default SolutionEditor;

