/* ACTION CREATOR */

/*
 * action types
 */

export const KEY_PRESSED = 'KEY_PRESSED'
export const STRING_CHANGED = 'STRING_CHANGED'
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const CHANGE_KEYMAP = 'CHANGE_KEYMAP'
export const LOAD_CHALLENGE = 'LOAD_CHALLENGE'
export const CHECK_USER = 'CHECK_USER'
export const COUNT_DOWN = 'COUNT_DOWN'
export const COUNT_DOWN_BY_SECOND = 'COUNT_DOWN_BY_SECOND'
export const START_TIMER = 'START_TIMER'
export const STOP_TIMER = 'STOP_TIMER'
export const CLOCK_RUNNING = 'CLOCK_RUNNING'
export const SETTING_INTERVAL = 'SETTING_INTERVAL'
export const CLOCK_STOP = 'CLOCK_STOP'
export const STORE_CHALLENGES = 'STORE_CHALLENGES'
export const HIDE_MODAL = 'HIDE_MODAL'
export const SHOW_MODAL = 'SHOW_MODAL'

export const STORE_RESULTS = 'STORE_RESULTS'
export const SAVE = 'SAVE'
export const SAVE_SUCCESS = 'SAVE_SUCCESS'
export const SAVE_ERROR = 'SAVE_ERROR'

/*
 * action creators
 */

export function keyPressed(ch) {
    return { type: KEY_PRESSED, ch }
}

export function stringChanged(newCode, timeStamp) {
    return { type: STRING_CHANGED, code: newCode, timeStopped: timeStamp }
}

export function incrementCounter() {
  return { type: INCREMENT_COUNTER }
}

export function updateKeyMap(newKeyMap) {
  return { type: CHANGE_KEYMAP, keyMap: newKeyMap }
}

export function loadChallenge(unsolved, solved) {
  return { type: LOAD_CHALLENGE, unsolved: unsolved, solved: solved }
}

export function checkUser(loggedIn, username, picture, userId) {
  return { type: CHECK_USER, loggedIn: loggedIn, username: username, picture: picture, currentUserId: userId }
}

export function countDown() {
  return { type: COUNT_DOWN }
} 

export function countDownBySecond() {
  return {type: COUNT_DOWN_BY_SECOND}
}

export function startTimer (timestamp) {
  return { type: START_TIMER, timeBegan: timestamp }
}

export function stopTimer (timestamp) {
  return { type: STOP_TIMER, timeStopped: timestamp}
}

export function clockRunning (timeelapsed) {
  // var currentTime = new Date();
  // var elapsed = new Date(currentTime-state.timeBegan-state.stoppedDuration);
  return { type: CLOCK_RUNNING }
}

export function settingInterval (intervals) {
  return { type: SETTING_INTERVAL, started: intervals }
}

export function clockStop () {
  return { type: CLOCK_STOP }
}

export function storeChallenges (challenges) {
  return { type: STORE_CHALLENGES, challenges: challenges }
}

// export function storeResults (tbd) {
//   return { type: STORE_RESULTS, results: results }
// }


// export function save () {
//   return (dispatch, getState) => {
//     var currentState = getState();
//     var interestingBits = extractInterestingBitsFromState(currentState);

//     dispatch({type: 'SAVE'});

//     $.post(someUrl, {
//       method: 'POST',
//       body: JSON.stringify(interestingBits)
//     })
//     .then(checkStatus) // from https://github.com/github/fetch#handling-http-error-statuses
//     .then((response) => response.json())
//     .then((json) => dispatch saveSuccess(json.someResponseValue))
//     .catch((error) =>
//       console.error(error)
//       dispatch saveError(error)
//     );
//   }
// }

// export function saveSuccess (someResponseValue) {
//   return {type: 'SAVE_SUCCESS', someResponseValue}
// } 

// export function saveError (error) {
//   return {type: 'SAVE_ERROR', error}
// } 

export function hideModal() {
  return { type: HIDE_MODAL }
}

export function showModal(cheatSheet) {
  return { type: SHOW_MODAL, cheatSheet: cheatSheet}
}
