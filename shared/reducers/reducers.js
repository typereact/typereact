import { combineReducers } from 'redux';
import { KEY_PRESSED, STRING_CHANGED } from '../actions/actions.js'

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

const editorState = {
  mode: 'javascript',
  readOnly: false,
  solvedCode: 'for(var i=0;i < array.length; i++) {\n  console.log("hello");\n}\n',
  statusText: 'NOT A MATCH',
  isMatch: false,
  code: 'for(var i=0;i < array.length;'
}

function reducer_onCodeChange(state = editorState, action) {
  console.log('reducer_onCodeChange was called with state', state, 'and action', action)
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
                    code: action.code
                    //index was returned from action creator (as an argument, from todo tutorial)
                    //we want to change the value of the prop
                    // Object.assign({}, state, {
                    //   isMatch: true
                    // })
                }
      } else {
        return {
                    mode: state.mode,
                    readOnly: state.readOnly,
                    solvedCode: state.solvedCode,
                    statusText: state.statusText,
                    isMatch: false,
                    code: action.code
                    //index was returned from action creator (as an argument, from todo tutorial)
                    //we want to change the value of the prop
                    // Object.assign({}, state, {
                    //   isMatch: true
                    // })
                }
      }
    default:
      return state
  }
}



const editorApp = combineReducers({
  trackKeys,
  reducer_onCodeChange
});

export default editorApp;

// {
//   trackKeys:[],
//   reducer_onCodeChange: {
//     mode:
//     readOnly:
//     ...
//   }
// }




