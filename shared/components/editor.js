import React from 'react';
import ReactDOM from 'react-dom';
import Codemirror from 'react-codemirror';
import SolutionEditor from './solutionEditor.js'
require('codemirror/lib/codemirror.css');
require('../css/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/keymap/sublime');
require('codemirror/keymap/emacs');
require('codemirror/keymap/vim');
require('codemirror/addon/edit/closebrackets.js')
var beautify = require('js-beautify').js_beautify

import $ from 'jquery';
// import { Defaults } from './solutionEditor.js';
import { Component, PropTypes } from 'react';
// import { createStore, combineReducers } from 'redux';
import { connect } from 'react-redux';
import { stringChanged } from '../actions/actions.js';
import editorApp from '../reducers/reducers.js';

var bindings = {
  'Alt-Left': 0,
  'Alt-Right':0,
  'Ctrl-Alt-Up': 0, //maybe
  'Ctrl-Alt-Down': 0, //maybe
  'Shift-Cmd-L':0, //doesn't work on codemirror + sublime
  'Shift-Tab':0, //doesn't work on codemirror  
  'Cmd-L':0, 
  'Shift-Cmd-K':0, //doesn't work on sublime
  'Cmd-Enter':0,
  'Shift-Cmd-Enter':0,
  'Cmd-D':0,
  'Shift-Cmd-Space':0,
  'Shift-Cmd-M': 0, //doesn't work on sublime
  'Cmd-M':0, //doesn't work on sublime
  'Cmd-Ctrl-Up':0, 
  'Cmd-Ctrl-Down': 0,
  'Cmd-J':0,
  'Shift-Cmd-D': 0,
  'Cmd-T':0, //doesn't work on comdemirror + not sure what it does
  'Alt-Q':0, //doesn't work on codemirror + sublime
  'Cmd-K Cmd-Backspace':0,
  'Cmd-K Cmd-K': 0,
  'Cmd-K Cmd-U':0,
  'Cmd-K Cmd-L':0,
  'Cmd-K Cmd-Space':0, // doesn't work + not sure what it does
  'Cmd-K Cmd-A': 0, // doesn't work + not sure what it does
  'Cmd-K Cmd-W': 0, // doesn't work + not sure what it does
  'Cmd-K Cmd-X' :0, // doesn't work + not sure what it does
  'Cmd-K Cmd-Y': 0, // doesn't work + not sure what it does
  'Cmd-K Cmd-C': 0, //maybe
  'Shift-Alt-Up': 0,
  'Shift-Alt-Down': 0,
}


 // class Editor extends Component({
let Editor = React.createClass({
// REFFACTOR THIS SECTION
//   getInitialState: function() {
//     return {
//       code: this.props.challengeUnsolved,
//       solvedCode: this.props.challengeSolved,
//       readOnly: false,
//       mode: 'javascript',
//       counter: 0,
//       keyMap: 'sublime'
//     };
//   },
//   componentWillReceiveProps: function(nextProps) {
//     console.log('componentWillReceiveProps', this.props)
//     this.setState({
//       code: nextProps.challengeUnsolved,
//       solvedCode: beautify(nextProps.challengeSolved, {indent_size: 2})
//     })
//   },
//   handleKeyPress: function() {
//     this.setState({counter:this.state.counter +1});
//     console.log('counter is', this.state.counter);
//   },
//   handleKey: function(instance, name, event) {
//     this.setState({counter:this.state.counter + 1});
//     if(name in bindings) {
//       bindings[name]++;
//     }
//     console.log('handle key ', this.state.counter)
//     console.log('name is ', name)
//   },
//   updateCode: function(newCode) {
//     console.log(JSON.stringify(newCode));
//     console.log(JSON.stringify(this.state.solvedCode));
//     this.setState({
//       code: newCode
//     });
//     if(this.state.code === this.state.solvedCode) {
//       alert('Good job!');
//       console.log('Good job!');
//     }
//   },
//   updateKeymap: function(newKeymap) {
//     // console.log('updating keymap to ' + newKeymap)
//     this.setState({
//       keyMap: newKeymap
//     });
//     this.refs.editor.focus();
//   },
//   render: function() {
//     var options = {
//       lineNumbers: true,
//       mode: this.state.mode,
//       readOnly: this.state.readOnly,
//       keyMap: this.state.keyMap,
//       tabSize: 2,
//       showCursorWhenSelecting: true,
//       matchBrackets: true,
//       autoCloseBrackets: true
//     };
//     console.log(this.state.keyMap);
//     return <div>Keystrokes:{this.state.counter}
//       <br></br> 
//       <button style={{display: 'inline-block'}} onClick={this.updateKeymap.bind(this, 'sublime')}>Sublime</button>
//       <button style={{display: 'inline-block'}} onClick={this.updateKeymap.bind(this, 'vim')}>Vim</button>
//       <button style={{display: 'inline-block'}} onClick={this.updateKeymap.bind(this, 'emacs')}>Emacs</button>
//       <Codemirror id='userEditor' ref="editor" value={this.state.code} onkeyPressHandled={this.handleKeyPress} onkeyHandled={this.handleKey} onChange={this.updateCode} options={options} />
//     </div>
//   }
// });

// var ShowCounter = exports.ShowCounter = ShowCounter;


    render: function() {
      console.log('inside editor component', this.props.code)
        var options = {
            mode: this.props.mode,
            readOnly: this.props.readOnly,
            lineNumbers: true,
            keyMap: 'sublime',
            tabSize: 2,
            showCursorWhenSelecting: true
        };
        return <Codemirror ref="editor" value={this.props.code} onChange={this.props.onCodeChange} options={options} />
    }
})

Editor.propTypes = {
  onCodeChange: PropTypes.func,
  code: PropTypes.string,
  readOnly: PropTypes.bool,
  mode: PropTypes.string
  // isMatch: PropTypes.bool,
  // statusText: PropTypes.string,
};
// Editor.defaultProps = {
//   code: 'for(var i=0;i < array.length;',
//   readOnly: false,
//   mode: 'javascript'
//   // isMatch: false,
//   // statusText: 'MATCH COMPLETE',
// }

/*
mapStateToProps
*/
function mapStateToProps(state) {
  // console.log('entering mapStateToProps');
  console.log('state.code is ' +state.reducer_onCodeChange.code);
  return {
    code: state.reducer_onCodeChange.code
  }
}


/*
mapDispatchToProps`
*/
// trying to call func in action creator
function mapDispatchToProps(dispatch) {
  // console.log('entering mapDispatchToProps');
  // console.log(this);
  return {
    onCodeChange: function(newCode) {
      // debugger
      console.log('got an onCodeChange');
      dispatch(stringChanged(newCode))
    }
  }
}


//connect element
export default connect(mapStateToProps, mapDispatchToProps)(Editor);
