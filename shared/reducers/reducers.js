import { combineReducers } from 'redux';
import { KEY_PRESSED, STRING_CHANGED, INCREMENT_COUNTER } from '../actions/actions.js'

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
  counter: 10
}

function editorState(state = initEditorState, action) {
  console.log('editorState was called with state', state, 'and action', action)
  switch (action.type) {
    case STRING_CHANGED:
    // debugger
      console.log('comparing strings');
      if (action.code === state.solvedCode) {
        console.log('found a match');
        return {
          mode: state.mode,
          readOnly: state.readOnly,
          solvedCode: state.solvedCode,
          statusText: state.statusText,
          isMatch: true,
          code: action.code,
          counter: state.counter
        }
      } else {
        return {
          mode: state.mode,
          readOnly: state.readOnly,
          solvedCode: state.solvedCode,
          statusText: state.statusText,
          isMatch: false,
          code: action.code,
          counter: state.counter
        }
      }
    case INCREMENT_COUNTER:
      console.log('gonna increment counter');
      console.log('current counter is: ' + state.counter);
      return {
          mode: state.mode,
          readOnly: state.readOnly,
          solvedCode: state.solvedCode,
          statusText: state.statusText,
          isMatch: false,
          code: state.code,
          counter: state.counter + 1
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




