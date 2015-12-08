import React from 'react';
import ReactDOM from 'react-dom';
import Codemirror from 'react-codemirror';
require('codemirror/mode/javascript/javascript.js');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');
require('codemirror/keymap/sublime.js');
require('codemirror/lib/codemirror.css');

// require('../node_modules/codemirror/mode/javascript/javascript')
// import '../../node_modules/react-codemirror/node_modules/mode/javascript/javascript.js';

var defaults = {
    javascript: 'for(var i=0;i < array.length; i++)',
    markdown: '# Heading\n\nSome **bold** and _italic_ text\nBy [Jed Watson](https://github.com/JedWatson)'
}
let Editor = React.createClass({
    getInitialState: function() {
        return {
            // code: defaults.markdown,
            // mode: 'markdown'
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
            lineNumbers: true,
            mode: this.state.mode,
            // mode: 'javascript'
            // keyMap: 'sublime',
        };
        return <Codemirror ref="editor" value={this.state.code} onChange={this.updateCode} options={options} />
    }
});

export default Editor;

// ReactDOM.render(<Editor/>, document.getElementById('editor'));