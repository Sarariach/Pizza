import {CHOOSE_DRONE} from '../actions/choose'

export default function (state = 1, action={}) {
    switch (action.type) {
      case CHOOSE_DRONE: {
      if (state === 1) {
      return state === 1.0
      } else {
        return state = 1
    }
  }
  default:
  return state
}
}