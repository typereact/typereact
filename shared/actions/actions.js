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