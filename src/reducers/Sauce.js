import {CHOOSE_SAUCE} from '../actions/choose'

export default function (state = [], action={}) {
    switch (action.type) {
      case CHOOSE_SAUCE:
      return action.payload.id
      default:
        return state
    }
  }