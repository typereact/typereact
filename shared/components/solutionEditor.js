import React from 'react';
import ReactDOM from 'react-dom';
import Codemirror from 'react-codemirror';
// require('react-codemirror/node_modules/codemirror/mode/javascript/javascript.js');
// require('react-codemirror/node_modules/codemirror/mode/xml/xml');
// require('react-codemirror/node_modules/codemirror/mode/markdown/markdown');
// require('react-codemirror/node_modules/codemirror/keymap/sublime.js');
require('codemirror/lib/codemirror.css');
require('../css/codemirror.css')
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/keymap/sublime');

var Defaults = exports.Defaults = {
    javascript: 'for(var i=0;i < array.length; i++)',
    markdown: '# Heading\n\nSome **bold** and _italic_ text\nBy [Jed Watson](https://github.com/JedWatson)'
}


let SolutionEditor = React.createClass({
    getInitialState: function() {
        return {
            // code: defaults.markdown,
            // mode: 'markdown',
            code: this.props.challengeSolved,
            readOnly: true,
            mode: 'javascript'
        };
    },
    componentWillReceiveProps: function(nextProps) {
      this.setState({
        code: nextProps.challengeSolved
      })
    },
    updateCode: function(newCode) {
        this.setState({
            code: newCode
        });
    },
    render: function() {
        var options = {
            lineNumbers: true,
            mode: this.state.mode,
            readOnly: this.state.readOnly,
            tabSize: 2,
            // mode: 'javascript'
            keyMap: 'sublime'
        };
        return <Codemirror ref="solutionEditor" value={this.state.code} onChange={this.updateCode} options={options} />
    }
});

export default SolutionEditor;

