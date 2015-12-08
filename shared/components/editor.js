// var React = require('react');
// var Codemirror = require('react-codemirror');
// var reactDOM = require('react-dom');

import React from 'react';
import ReactDOM from 'react-dom';
import Codemirror from 'react-codemirror';
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');

var defaults = {
    javascript: 'hello world'
}
let Editor = React.createClass({
    getInitialState: function() {
        return {
            code: defaults.javascript,
            mode: 'javascript'
        };
    },
    updateCode: function(newCode) {
        this.setState({
            code: newCode
        });
    },
    render: function() {
        var options = {
            lineNumbers: true
        };
        return <Codemirror ref="editor" value={this.state.code} onChange={this.updateCode} options={options} />
    }
});

export default Editor;

// ReactDOM.render(<Editor/>, document.getElementById('test-div'));