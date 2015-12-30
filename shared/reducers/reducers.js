import { combineReducers } from 'redux';
var beautify = require('js-beautify').js_beautify;
import { LOAD_CHALLENGE, CHECK_USER, KEY_PRESSED, STRING_CHANGED, INCREMENT_COUNTER, COUNT_DOWN, COUNT_DOWN_BY_SECOND, START_TIMER, STOP_TIMER, CLOCK_RUNNING, SETTING_INTERVAL, CLOCK_STOP, CHANGE_KEYMAP, STORE_CHALLENGES, UPDATE_TOP_25_TIMES, HIDE_MODAL, SHOW_MODAL, UPDATE_TOP_25_KEYSTROKES, INCREMENT_KEY_HANDLED, SHOW_CLOCK, SOLVED_CODE_CHANGED, UNSOLVED_CODE_CHANGED, FIELD_CHANGED, CHALLENGE_COMPLETE, ADD_COMPLETED_CHALLENGES, SELECT_MENU_ITEM, CHANGE_ORDER_OPTION, HIDE_RESULTS_MODAL } from '../actions/actions.js';
import $ from 'jquery';
/* REDUCER */

const initEditorState = {
  mode: 'javascript',
  readOnly: true,
  solvedCode: 'We are fetching a challenge for you to play!',
  statusText: 'NOT A MATCH',
  isMatch: false,
  code: 'Wait a moment please...',
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
  hasPosted: false,
  editDistance: 100,
  hideClock: true,
  resultsShow: false
};

function editorState(state = initEditorState, action) {
  switch (action.type) {
  case STRING_CHANGED:
    if (action.code === state.solvedCode) {
      $('.start-timer').html('It\'s a match!');
      return {
        mode: state.mode,
        readOnly: 'nocursor',
        solvedCode: state.solvedCode,
        statusText: state.statusText,
        isMatch: true,
        code: action.code,
        counter: state.counter,
        keyMap: state.keyMap,
        clockRunning: false,
        timeStopped: action.timeStopped,
        timeBegan: state.timeBegan,
        stoppedDuration: state.stoppedDuration,
        started: state.started,
        min: state.min,
        sec: state.sec,
        ms: state.ms,
        countdown: state.countdown,
        hasPosted: state.hasPosted,
        editDistance: state.editDistance,
        hideClock: state.hideClock,
        resultsShow: true
      };
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
        countdown: state.countdown,
        hasPosted: state.hasPosted,
        editDistance: state.editDistance,
        hideClock: state.hideClock,
        resultsShow: state.resultsShow
      };
    }
    break;
  case INCREMENT_COUNTER:
    if(state.isMatch) {
      return {
        mode: state.mode,
        readOnly: state.readOnly,
        solvedCode: state.solvedCode,
        statusText: state.statusText,
        isMatch: state.isMatch,
        code: state.code,
        counter: state.counter,
        keyMap: state.keyMap,
        clockRunning: state.clockRunning,
        timeStopped: action.timeStopped,
        timeBegan: state.timeBegan,
        stoppedDuration: state.stoppedDuration,
        started: state.started,
        min: state.min,
        sec: state.sec,
        ms: state.ms,
        countdown: state.countdown,
        hasPosted: true,
        editDistance: state.editDistance,
        hideClock: state.hideClock,
        resultsShow: state.resultsShow
      };
    } else if (state.readOnly === false) {
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
        countdown: state.countdown,
        hasPosted: state.hasPosted,
        editDistance: state.editDistance,
        hideClock: state.hideClock,
        resultsShow: state.resultsShow
      };
    } else {
      return state;
    }
    break;
  case INCREMENT_KEY_HANDLED:
    if(state.isMatch) {
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
        countdown: state.countdown,
        hasPosted: true,
        editDistance: state.editDistance,
        hideClock: state.hideClock,
        resultsShow: state.resultsShow
      };
    } else if (state.readOnly === false){
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
        countdown: state.countdown,
        hasPosted: state.hasPosted,
        editDistance: state.editDistance,
        hideClock: state.hideClock,
        resultsShow: state.resultsShow
      };
    } else {
      return state;
    }
    break;
  case CHANGE_KEYMAP:
    if(action.keyMap === 'sublime') {
      // console.log('inside keyMap sublime');
      $('.sublime-option').addClass('editor-option-clicked');
      $('.vim-option').removeClass('editor-option-clicked');
      $('.emacs-option').removeClass('editor-option-clicked');
    }
    if(action.keyMap === 'vim') {
      // console.log('inside keyMap vim');
      $('.vim-option').addClass('editor-option-clicked');
      $('.sublime-option').removeClass('editor-option-clicked');
      $('.emacs-option').removeClass('editor-option-clicked');
    }
    if(action.keyMap === 'emacs') {
      // console.log('inside keyMap emacs');
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
      countdown: state.countdown,
      hasPosted: state.hasPosted,
      editDistance: state.editDistance,
      hideClock: state.hideClock
    };
  case LOAD_CHALLENGE:
    return {
      mode: state.mode,
      readOnly: state.readOnly,
      solvedCode: action.solved,
      statusText: state.statusText,
      isMatch: state.isMatch,
      code: action.unsolved,
      counter: state.counter,
      keyMap: state.keyMap,
      clockRunning: state.clockRunning,
      timeStopped: action.timeStopped,
      timeBegan: state.timeBegan,
      stoppedDuration: state.stoppedDuration,
      started: state.started,
      min: state.min,
      sec: state.sec,
      ms: state.ms,
      countdown: state.countdown,
      hasPosted: state.hasPosted,
      editDistance: action.editDistance,
      hideClock: state.hideClock
    };
  case START_TIMER:
    $('.countdown-clock').removeClass('display-background');
    $('.start-timer').html('GO!');
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
      clockRunning: true,
      hasPosted: state.hasPosted,
      editDistance: state.editDistance,
      hideClock: true
    };
  case STOP_TIMER:
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
      clockRunning: false,
      hasPosted: state.hasPosted,
      editDistance: state.editDistance,
      hideClock: state.hideClock
    };
  case CLOCK_RUNNING:
    if(state.clockRunning === true) {
      var currentTime = new Date();
      var timeElapsed = new Date(currentTime-state.timeBegan-state.stoppedDuration);
    } 
    if(state.clockRunning === false) {
      clearInterval(state.started);
    }
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
      clockRunning: state.clockRunning,
      hasPosted: state.hasPosted,
      editDistance: state.editDistance,
      hideClock: state.hideClock
    };
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
      clockRunning: state.clockRunning,
      hasPosted: state.hasPosted,
      editDistance: state.editDistance,
      hideClock: state.hideClock
    };
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
      clockRunning: state.clockRunning,
      hasPosted: state.hasPosted,
      editDistance: state.editDistance,
      hideClock: state.hideClock
    };
  case SHOW_CLOCK: 
    // console.log('inside show_clock');
    $('.actual-countdown-clock').addClass('display-clock');
    $('.countdown-clock').addClass('display-background');
    $('.start-timer').attr('disabled', 'disabled').html('Get ready!');
    
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
      clockRunning: state.clockRunning,
      hasPosted: state.hasPosted,
      editDistance: state.editDistance,
      hideClock: false
    };
  case HIDE_RESULTS_MODAL:
    return {
      mode: state.mode,
      readOnly: state.readOnly,
      solvedCode: state.solvedCode,
      statusText: state.statusText,
      isMatch: state.isMatch,
      code: state.code,
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
      countdown: state.countdown,
      hasPosted: state.hasPosted,
      editDistance: state.editDistance,
      hideClock: state.hideClock,
      resultsShow: false
    };
  default:
    return state;
  }
}

const initLoggedInState = {
  loggedIn: false,
  user: 'Guest',
  profilePic: null,
  lgShow: false,
  currentUserId: 1
};

function loggedInState(state = initLoggedInState, action) {
  switch(action.type) {
  case CHECK_USER:
    return {
      loggedIn: action.loggedIn,
      user: action.username,
      profilePic: action.picture,
      currentUserId: action.currentUserId
    };
  case HIDE_MODAL:
    return {
      loggedIn: state.loggedIn,
      user: state.user,
      profilePic: state.profilePic,
      lgShow: false
    };
  case SHOW_MODAL:
    return {
      loggedIn: state.loggedIn,
      user: state.user,
      profilePic: state.profilePic,
      lgShow: true,
      cheatSheet: action.cheatSheet
    };
  default:
    return state;
  }
}

const initChallengeState = {
  challenges: [],
  globalTop25Times: [],
  globalTop25KeyStrokes: []
};

function challengeState(state = initChallengeState, action){
  switch(action.type) {
  case STORE_CHALLENGES:
    return {
      challenges: action.challenges,
      globalTop25Times: state.globalTop25Times,
      globalTop25KeyStrokes: state.globalTop25KeyStrokes
    };
  case UPDATE_TOP_25_TIMES:
    return {
      challenges: state.challenges,
      globalTop25Times: action.top25Times,
      globalTop25KeyStrokes: state.globalTop25KeyStrokes
    };
  case UPDATE_TOP_25_KEYSTROKES:
    return {
      challenges: state.challenges,
      globalTop25Times: state.globalTop25Times,
      globalTop25KeyStrokes: action.top25KeyStrokes
    };
  default:
    return state;
  }
}

const initAddChallengeState = {
  codeSolved: '//add your code challenge here',
  codeUnsolved: '//add code to be fixed here',
  challengeName: ''
};

function addChallengeState(state = initAddChallengeState, action){
  switch(action.type) {
  case SOLVED_CODE_CHANGED:
    return {
      codeSolved: action.code,
      codeUnsolved: state.codeUnsolved,
      challengeName: state.challengeName
    };
  case UNSOLVED_CODE_CHANGED:
    return {
      codeSolved: state.codeSolved,
      codeUnsolved: action.code, 
      challengeName: state.challengeName
    };
  case FIELD_CHANGED:
    return {
      codeSolved: state.codeSolved,
      codeUnsolved: state.codeUnsolved,
      challengeName: action.text
    };
  default:
    return state;
  }
}

const initprofilePageState = {
  allChallenges: [],
  dropDownDisplay: 'Completed Challenges',
  challengeResults: [],
  keyStrokeTable: [],
  orderOptions: 'Order Table By'
};

function profilePageState(state = initprofilePageState, action) {
  switch (action.type) {
  case ADD_COMPLETED_CHALLENGES:
    return {
      allChallenges: action.allChallenges,
      dropDownDisplay: state.dropDownDisplay,
      challengeResults: action.challengeResults,
      keyStrokeTable: state.keyStrokeTable,
      orderOptions: state.orderOptions
    };
  case SELECT_MENU_ITEM:
    var tableArr = [];
    var rankingNum = 1;
    if(state.orderOptions === 'Time') {
      for(var i=0; i < state.challengeResults.length; i++) {
        if(state.challengeResults[i].challengeID === action.dropDownDisplay) {
          var tableObj = {};
          tableObj.ranking = 0;
          tableObj.key = state.challengeResults[i].numKeyStrokes;
          tableObj.time = state.challengeResults[i].timeToComplete;
          tableArr.push(tableObj);
        }
      }

      tableArr.sort(function(a,b){return a.time-b.time;});
      tableArr.forEach(function(result) {
        result.ranking = rankingNum;
        rankingNum++;
      });

    } else {
      for(var j=0; j < state.challengeResults.length; j++) {
        if(state.challengeResults[j].challengeID === action.dropDownDisplay) {
          var tableObj2 = {};
          tableObj2.ranking = rankingNum;
          tableObj2.key = state.challengeResults[j].numKeyStrokes;
          tableObj2.time = state.challengeResults[j].timeToComplete;
          tableArr.push(tableObj2);
          rankingNum++;
        }
      }
    }
    return {
      allChallenges: state.allChallenges,
      dropDownDisplay: 'Challenge #' + action.dropDownDisplay,
      challengeResults: state.challengeResults,
      keyStrokeTable: tableArr,
      orderOptions: state.orderOptions 
    };
  case CHANGE_ORDER_OPTION:
    var challenge = state.dropDownDisplay.substr(11);
    var option;
    var tableArr2 = [];
    var rankingNum2 = 1;
    if(action.orderOptions === '1') {
      $('.keystroke-header').addClass('chosen-header');
      $('.time-header').removeClass('chosen-header');

      option = 'Key Stroke';
      for(var k=0; k < state.challengeResults.length; k++) {
        if(state.challengeResults[k].challengeID.toString() === challenge) {
          var tableObj3 = {};
          tableObj3.ranking = rankingNum2;
          tableObj3.key = state.challengeResults[k].numKeyStrokes;
          tableObj3.time = state.challengeResults[k].timeToComplete;
          tableArr2.push(tableObj3);
          rankingNum2++;
        }
      }
    } else {
      $('.time-header').addClass('chosen-header');
      $('.keystroke-header').removeClass('chosen-header');
      option = 'Time';
      for(var l=0; l < state.challengeResults.length; l++) {
        if(state.challengeResults[l].challengeID.toString() === challenge.toString()) {
          console.log('rankingNum2 is ', rankingNum2);
          var tableObj4 = {};
          tableObj4.ranking = 0;
          tableObj4.key = state.challengeResults[l].numKeyStrokes;
          tableObj4.time = state.challengeResults[l].timeToComplete;
          tableArr2.push(tableObj4);
        }
      }
      tableArr2.sort(function(a,b){return a.time-b.time;});
      tableArr2.forEach(function(result) {
        result.ranking = rankingNum2;
        rankingNum2++;
      });
    }

    return {
      allChallenges: state.allChallenges,
      dropDownDisplay: state.dropDownDisplay,
      challengeResults: state.challengeResults,
      keyStrokeTable: tableArr2,
      orderOptions: option
    };
  default:
    return state;
  }
}

const editorApp = combineReducers({
  challengeState,
  editorState,
  loggedInState,
  addChallengeState,
  profilePageState
});

export default editorApp;




