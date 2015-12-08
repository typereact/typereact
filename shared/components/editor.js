import React from 'react';
import ReactDOM from 'react-dom';
import Codemirror from 'react-codemirror';
require('react-codemirror/node_modules/codemirror/mode/javascript/javascript.js');
require('react-codemirror/node_modules/codemirror/mode/xml/xml');
require('react-codemirror/node_modules/codemirror/mode/markdown/markdown');
require('react-codemirror/node_modules/codemirror/keymap/sublime.js');
require('codemirror/lib/codemirror.css');

var defaults = {
    javascript: 'for(var i=0;i < array.length; i++)',
    markdown: '# Heading\n\nSome **bold** and _italic_ text\nBy [Jed Watson](https://github.com/JedWatson)'
}
let Editor = React.createClass({
    getInitialState: function() {
        return {
            // code: defaults.markdown,
            // mode: 'markdown',
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
            // mode: 'javascript'
            keyMap: 'sublime'
        };
        return <Codemirror ref="editor" value={this.state.code} onChange={this.updateCode} options={options} />
    }
});

export default Editor;

