import { combineReducers } from 'redux';
import { KEY_PRESSED, STRING_CHANGED, INCREMENT_COUNTER, CHANGE_KEYMAP, LOAD_CHALLENGE } from '../actions/actions.js'
var beautify = require('js-beautify').js_beautify;
/* REDUCER */


function trackKeys(state = [], action) {
  switch (action.type) {
    case KEY_PRESSED:
      return [
        
      ]
    default:
      return state
  }
}

const initEditorState = {
  mode: 'javascript',
  readOnly: false,
  solvedCode: 'console.log("hello");',
  statusText: 'NOT A MATCH',
  isMatch: false,
  code: 'for(var i=0;i < array.length;',
  counter: 10,
  keyMap: 'sublime'
}

function editorState(state = initEditorState, action) {
  console.log('editorState was called with state', state, 'and action', action)
  switch (action.type) {
    case STRING_CHANGED:
      if (action.code === state.solvedCode) {
        console.log('found a match');
        return {
          mode: state.mode,
          readOnly: state.readOnly,
          solvedCode: state.solvedCode,
          statusText: state.statusText,
          isMatch: true,
          code: action.code,
          counter: state.counter,
          keyMap: state.keyMap,
        }
      } else {
        return {
          mode: state.mode,
          readOnly: state.readOnly,
          solvedCode: state.solvedCode,
          statusText: state.statusText,
          isMatch: false,
          code: action.code,
          counter: state.counter,
          keyMap: state.keyMap,
        }
      }
    case INCREMENT_COUNTER:
      return {
          mode: state.mode,
          readOnly: state.readOnly,
          solvedCode: state.solvedCode,
          statusText: state.statusText,
          isMatch: state.isMatch,
          code: state.code,
          counter: state.counter + 1,
          keyMap: state.keyMap,
      }
    case CHANGE_KEYMAP:
      return {
          mode: state.mode,
          readOnly: state.readOnly,
          solvedCode: state.solvedCode,
          statusText: state.statusText,
          isMatch: state.isMatch,
          code: state.code,
          counter: state.counter,
          keyMap: action.keyMap,
      }
    case LOAD_CHALLENGE:
      return {
          mode: state.mode,
          readOnly: state.readOnly,
          solvedCode: beautify(action.solved, {indent_size: 2}),
          statusText: state.statusText,
          isMatch: state.isMatch,
          code: action.unsolved,
          counter: state.counter,
          keyMap: state.keyMap,
      }
    default:
      return state
  }
}



const editorApp = combineReducers({
  trackKeys,
  editorState
});

export default editorApp;




