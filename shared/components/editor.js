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
        // console.log('inside render function');
        return <Codemirror ref="editor" value={this.state.code} onChange={this.updateCode} options={options} />
    }
});

/* ACTION CREATOR */

/*
 * action types
 */

export const KEY_PRESSED = 'KEY_PRESSED'
export const STRING_CHANGED = 'STRING_CHANGED'

/*
 * action creators
 */

export function keyPressed(ch) {
    return { type: KEY_PRESSED, ch }
}

export function stringChanged(string) {
    return { type: STRING_CHANGED, string }
}

/* REDUCER */

// import { combineReducers } from 'redux'
// import { KEY_PRESSED, STRING_CHANGED } from './actions'

function trackKeys(state = [], action) {
  switch (action.type) {
    case KEY_PRESSED:
      return [
        
      ]
    default:
      return state
  }
}

function matchCode(state = [], action) {
  switch (action.type) {
    case STRING_CHANGED:
      return [
        
      ]
    default:
      return state
  }
}
 
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: true
        }),
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}

// const editorApp = combineReducers({
//   trackKeys,
//   matchCode
// })

// export default editorApp






export default Editor;

