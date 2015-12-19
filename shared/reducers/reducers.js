import { combineReducers } from 'redux';
var beautify = require('js-beautify').js_beautify;
import { LOAD_CHALLENGE, CHECK_USER, KEY_PRESSED, STRING_CHANGED, INCREMENT_COUNTER, COUNT_DOWN, COUNT_DOWN_BY_SECOND, START_TIMER, STOP_TIMER, CLOCK_RUNNING, SETTING_INTERVAL, CLOCK_STOP, CHANGE_KEYMAP, STORE_CHALLENGES, UPDATE_TOP_FIVE_TIMES, HIDE_MODAL, SHOW_MODAL } from '../actions/actions.js'
// import { countDown, countDownBySecond } from '../actions/actions.js';
import $ from 'jquery';
/* REDUCER */

const initEditorState = {
  mode: 'javascript',
  readOnly: true,
  solvedCode: 'console.log("hello");',
  statusText: 'NOT A MATCH',
  isMatch: false,
  code: 'for(var i=0;i < array.length;',
  counter: 0,
  keyMap: 'sublime',
  clockRunning: false,
  timeStopped: null,
  timeBegan: null,
  stoppedDuration: 0,
  started: null,
  min: '0',
  sec: '0',
  ms:'0',
  countdown: 3,
}

function editorState(state = initEditorState, action) {
  // console.log('editorState was called with state', state, 'and action', action)
  switch (action.type) {
    case STRING_CHANGED:
      if (action.code === state.solvedCode) {
        return {
          mode: state.mode,
          readOnly: 'nocursor',
          solvedCode: state.solvedCode,
          statusText: state.statusText,
          isMatch: true,
          code: action.code,
          counter: state.counter + 1,
          keyMap: state.keyMap,
          clockRunning: false,
          timeStopped: action.timeStopped,
          timeBegan: state.timeBegan,
          stoppedDuration: state.stoppedDuration,
          started: state.started,
          min: state.min,
          sec: state.sec,
          ms: state.ms,
          countdown: state.countdown
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
          clockRunning: state.clockRunning,
          timeStopped: state.timeStopped,
          timeBegan: state.timeBegan,
          stoppedDuration: state.stoppedDuration,
          started: state.started,
          min: state.min,
          sec: state.sec,
          ms: state.ms,
          countdown: state.countdown
        }
      }
    case INCREMENT_COUNTER:
      if (state.readOnly === false) {
        return {
            mode: state.mode,
            readOnly: state.readOnly,
            solvedCode: state.solvedCode,
            statusText: state.statusText,
            isMatch: state.isMatch,
            code: state.code,
            counter: state.counter + 1,
            keyMap: state.keyMap,
            clockRunning: state.clockRunning,
            timeStopped: action.timeStopped,
            timeBegan: state.timeBegan,
            stoppedDuration: state.stoppedDuration,
            started: state.started,
            min: state.min,
            sec: state.sec,
            ms: state.ms,
            countdown: state.countdown
        }
      } else {
        return state
      }
    case CHANGE_KEYMAP:
      if(action.keyMap === 'sublime') {
        console.log('inside keyMap sublime')
        $('.sublime-option').addClass('editor-option-clicked');
        $('.vim-option').removeClass('editor-option-clicked');
        $('.emacs-option').removeClass('editor-option-clicked');
      }
      if(action.keyMap === 'vim') {
        console.log('inside keyMap vim')
        $('.vim-option').addClass('editor-option-clicked');
        $('.sublime-option').removeClass('editor-option-clicked');
        $('.emacs-option').removeClass('editor-option-clicked');
        // $('.sublime-options').addClass('editor-option-clicked2');
        // $('.emacs-options').addClass('editor-option-clicked2')
      }
      if(action.keyMap === 'emacs') {
        console.log('inside keyMap emacs')
        $('.emacs-option').addClass('editor-option-clicked');
        $('.sublime-option').removeClass('editor-option-clicked');
        $('.vim-option').removeClass('editor-option-clicked');
      }

      return {
          mode: state.mode,
          readOnly: state.readOnly,
          solvedCode: state.solvedCode,
          statusText: state.statusText,
          isMatch: state.isMatch,
          code: state.code,
          counter: state.counter,
          keyMap: action.keyMap,
          clockRunning: state.clockRunning,
          timeStopped: action.timeStopped,
          timeBegan: state.timeBegan,
          stoppedDuration: state.stoppedDuration,
          started: state.started,
          min: state.min,
          sec: state.sec,
          ms: state.ms,
          countdown: state.countdown
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
          counter: state.counter,
          clockRunning: state.clockRunning,
          timeStopped: action.timeStopped,
          timeBegan: state.timeBegan,
          stoppedDuration: state.stoppedDuration,
          started: state.started,
          min: state.min,
          sec: state.sec,
          ms: state.ms,
          countdown: state.countdown
      }
      case START_TIMER:
      return {
        mode: state.mode,
        readOnly: false,
        solvedCode: state.solvedCode,
        statusText: state.statusText,
        isMatch: state.isMatch,
        code: state.code,
        counter: state.counter,
        keyMap: state.keyMap,
        timeStopped: state.timeStopped,
        timeBegan: action.timeBegan,
        stoppedDuration: state.stoppedDuration,
        started: state.started,
        min: state.min,
        sec: state.sec,
        ms: state.ms,
        countdown: state.countdown,
        clockRunning: true
      }
    case STOP_TIMER:
    // console.log('timestop is: ', action.timeStopped);
      return {
        mode: state.mode,
        readOnly: state.readOnly,
        solvedCode: state.solvedCode,
        statusText: state.statusText,
        isMatch: state.isMatch,
        code: state.code,
        counter: state.counter,
        keyMap: state.keyMap,
        timeStopped: action.timeStopped,
        timeBegan: state.timeBegan,
        stoppedDuration: state.stoppedDuration,
        started: state.started,
        min: state.min,
        sec: state.sec,
        ms: state.ms,
        countdown: state.countdown,
        clockRunning: false
      }
    case CLOCK_RUNNING:
      if(state.clockRunning === true) {
        var currentTime = new Date();
        var timeElapsed = new Date(currentTime-state.timeBegan-state.stoppedDuration);
      } 
      if(state.clockRunning === false) {
        clearInterval(state.started);
      }
       // console.log('currentTime is ', currentTime)
       // console.log('state.timeBegan is ', state.timeBegan)
       // console.log('state.stoppeDuration is ', state.stoppedDuration)
       // console.log('timeElapsed is ', timeElapsed.getUTCMinutes())
       return {
        mode: state.mode,
        readOnly: state.readOnly,
        solvedCode: state.solvedCode,
        statusText: state.statusText,
        isMatch: state.isMatch,
        code: state.code,
        counter: state.counter,
        keyMap: state.keyMap,
        timeStopped: state.timeStopped,
        timeBegan: state.timeBegan,
        stoppedDuration: state.stoppedDuration,
        started: state.started,
        min: timeElapsed.getUTCMinutes().toString(),
        sec: timeElapsed.getUTCSeconds().toString(),
        ms: timeElapsed.getUTCMilliseconds().toString(),
        countdown: state.countdown,
        clockRunning: state.clockRunning
       }
    case SETTING_INTERVAL:
      return {
        mode: state.mode,
        readOnly: state.readOnly,
        solvedCode: state.solvedCode,
        statusText: state.statusText,
        isMatch: state.isMatch,
        code: state.code,
        counter: state.counter,
        keyMap: state.keyMap,
        timeStopped: state.timeStopped,
        timeBegan: state.timeBegan,
        stoppedDuration: state.stoppedDuration,
        started: action.started,
        min: state.min,
        sec: state.sec,
        ms: state.ms,
        countdown: state.countdown,
        clockRunning: state.clockRunning 
      }
    case CLOCK_STOP:
      // clearInterval(state.started);
      return {
        mode: state.mode,
        readOnly: state.readOnly,
        solvedCode: state.solvedCode,
        statusText: state.statusText,
        isMatch: state.isMatch,
        code: state.code,
        counter: state.counter,
        keyMap: state.keyMap,
        timeStopped: state.timeStopped,
        timeBegan: state.timeBegan,
        stoppedDuration: state.stoppedDuration,
        started: null,
        min: state.min,
        sec: state.sec,
        ms: state.ms,
        countdown: state.countdown,
        clockRunning: state.clockRunning 
      }
    default:
      return state
  }
}

const initLoggedInState = {
  loggedIn: false,
  user: 'Guest',
  profilePic: null,
  lgShow: false,
  currentUserId: 1
}

function loggedInState(state = initLoggedInState, action) {
  switch(action.type) {
    case CHECK_USER:
    // console.log('loggedInState: ' + JSON.stringify(action))
      return {
        loggedIn: action.loggedIn,
        user: action.username,
        profilePic: action.picture,
        currentUserId: action.currentUserId,
      }
    case HIDE_MODAL:
      return {
        loggedIn: state.loggedIn,
        user: state.user,
        profilePic: state.profilePic,
        lgShow: false,
      }
    case SHOW_MODAL:
      return {
        loggedIn: state.loggedIn,
        user: state.user,
        profilePic: state.profilePic,
        lgShow: true,
        cheatSheet: action.cheatSheet,
      }
    default:
      return state
  }
}

const initChallengeState = {
  challenges: [],
  topFiveTimes: [],
  topFiveKeyStrokes: []
}

function challengeState(state = initChallengeState, action){
  switch(action.type) {
    case STORE_CHALLENGES:
      return {
        challenges: action.challenges,
        topFiveTimes: state.topFiveTimes,
        topFiveKeyStrokes: state.topFiveKeyStrokes
      }
    case UPDATE_TOP_FIVE_TIMES:
      return {
        challenges: state.challenges,
        topFiveTimes: action.topFiveTimes,
        topFiveKeyStrokes: state.topFiveKeyStrokes
      }
    default:
      return state
  }
}
// const initTimerState = {
//     timeStopped: null,
//     timeBegan: null,
//     stoppedDuration: 0,
//     started: null,
//     min: '0',
//     sec: '0',
//     ms:'0',
//     countdown: 3,
//     clockRunning: false
// }

// function timerState(state=initEditorState, action) {
//   // console.log('timerState is ', state)
//   switch(action.type) {
//     case COUNT_DOWN:
//       setTimeout(dispatch(countDownBySecond), 1000)
//     case COUNT_DOWN_BY_SECOND:
//     case START_TIMER:
//       return {
//         mode: state.mode,
//         readOnly: state.readOnly,
//         solvedCode: state.solvedCode,
//         statusText: state.statusText,
//         isMatch: state.isMatch,
//         code: state.code,
//         counter: state.counter,
//         keyMap: state.keyMap,
//         timeStopped: state.timeStopped,
//         timeBegan: action.timeBegan,
//         stoppedDuration: state.stoppedDuration,
//         started: state.started,
//         min: state.min,
//         sec: state.sec,
//         ms: state.ms,
//         countdown: state.countdown,
//         clockRunning: true
//       }
//     case STOP_TIMER:
//     console.log('timestop is: ', action.timeStopped);
//       return {
//         mode: state.mode,
//         readOnly: state.readOnly,
//         solvedCode: state.solvedCode,
//         statusText: state.statusText,
//         isMatch: state.isMatch,
//         code: state.code,
//         counter: state.counter,
//         keyMap: state.keyMap,
//         timeStopped: action.timeStopped,
//         timeBegan: state.timeBegan,
//         stoppedDuration: state.stoppedDuration,
//         started: state.started,
//         min: state.min,
//         sec: state.sec,
//         ms: state.ms,
//         countdown: state.countdown,
//         clockRunning: false
//       }
//     case CLOCK_RUNNING:
//       if(state.clockRunning === true) {
//         var currentTime = new Date();
//         var timeElapsed = new Date(currentTime-state.timeBegan-state.stoppedDuration);
//       } 
//       if(state.clockRunning === false) {
//         clearInterval(state.started);
//       }
//        // console.log('currentTime is ', currentTime)
//        // console.log('state.timeBegan is ', state.timeBegan)
//        // console.log('state.stoppeDuration is ', state.stoppedDuration)
//        // console.log('timeElapsed is ', timeElapsed.getUTCMinutes())
//        return {
//         mode: state.mode,
//         readOnly: state.readOnly,
//         solvedCode: state.solvedCode,
//         statusText: state.statusText,
//         isMatch: state.isMatch,
//         code: state.code,
//         counter: state.counter,
//         keyMap: state.keyMap,
//         timeStopped: state.timeStopped,
//         timeBegan: state.timeBegan,
//         stoppedDuration: state.stoppedDuration,
//         started: state.started,
//         min: timeElapsed.getUTCMinutes().toString(),
//         sec: timeElapsed.getUTCSeconds().toString(),
//         ms: timeElapsed.getUTCMilliseconds().toString(),
//         countdown: state.countdown,
//         clockRunning: state.clockRunning
//        }
//     case SETTING_INTERVAL:
//       return {
//         mode: state.mode,
//         readOnly: state.readOnly,
//         solvedCode: state.solvedCode,
//         statusText: state.statusText,
//         isMatch: state.isMatch,
//         code: state.code,
//         counter: state.counter,
//         keyMap: state.keyMap,
//         timeStopped: state.timeStopped,
//         timeBegan: state.timeBegan,
//         stoppedDuration: state.stoppedDuration,
//         started: action.started,
//         min: state.min,
//         sec: state.sec,
//         ms: state.ms,
//         countdown: state.countdown,
//         clockRunning: state.clockRunning 
//       }
//     case CLOCK_STOP:
//       // clearInterval(state.started);
//       return {
//         mode: state.mode,
//         readOnly: state.readOnly,
//         solvedCode: state.solvedCode,
//         statusText: state.statusText,
//         isMatch: state.isMatch,
//         code: state.code,
//         counter: state.counter,
//         keyMap: state.keyMap,
//         timeStopped: state.timeStopped,
//         timeBegan: state.timeBegan,
//         stoppedDuration: state.stoppedDuration,
//         started: null,
//         min: state.min,
//         sec: state.sec,
//         ms: state.ms,
//         countdown: state.countdown,
//         clockRunning: state.clockRunning 
//       }
//     default:
//       return state
//   }
// }



const editorApp = combineReducers({
  challengeState,
  editorState,
  loggedInState,
  // timerState
});

export default editorApp;




