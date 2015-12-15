/* ACTION CREATOR */

/*
 * action types
 */

export const KEY_PRESSED = 'KEY_PRESSED'
export const STRING_CHANGED = 'STRING_CHANGED'
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const CHANGE_KEYMAP = 'CHANGE_KEYMAP'

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