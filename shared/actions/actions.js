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

/*
 * action creators
 */

export function keyPressed(ch) {
    return { type: KEY_PRESSED, ch }
}

export function stringChanged(newCode) {
    return { type: STRING_CHANGED, code: newCode }
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

export function checkUser(loggedIn, username, picture) {
  return { type: CHECK_USER, loggedIn: loggedIn, username: username, picture: picture}
}
// export function countDown() {
//   return { type: COUNT_DOWN }
// } 

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