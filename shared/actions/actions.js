

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

export function stringChanged(newCode) {
  // debugger
    return { type: STRING_CHANGED, code: newCode }
}