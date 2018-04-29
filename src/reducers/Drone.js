import {CHOOSE_DRONE} from '../actions/choose'

export default function (state = [], action={}) {
    switch (action.type) {
      case CHOOSE_DRONE:
      return action.payload.value
      default:
        return state
    }
  }