import { initalState } from './initial-state'

export function accounts(state, action) {
  if (typeof state === 'undefined') {
    return initalState
  }
  // switch (action.type) {
  //   case 'INCREMENT':
  //     return state + 1
  //   case 'DECREMENT':
  //     return state - 1
  //   default:
      return state
  // }
}
