import React from 'react';
import ReactDOM from 'react-dom';
import Codemirror from 'react-codemirror';
// require('react-codemirror/node_modules/codemirror/mode/javascript/javascript.js');
// require('react-codemirror/node_modules/codemirror/mode/xml/xml');
// require('react-codemirror/node_modules/codemirror/mode/markdown/markdown');
// require('react-codemirror/node_modules/codemirror/keymap/sublime.js');
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/keymap/sublime');

var defaults = {
    javascript: 'for(var i=0;i < array.length; i++)',
}
let Editor = React.createClass({
    getInitialState: function() {
        return {
            code: defaults.javascript,
            readOnly: false,
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
            lineNumbers: true,
            mode: this.state.mode,
            readOnly: this.state.readOnly,
            keyMap: 'sublime',
            tabSize: 2,
            showCursorWhenSelecting: true
        };
        return <Codemirror ref="editor" value={this.state.code} onChange={this.updateCode} options={options} />
    }
});

export default Editor;

