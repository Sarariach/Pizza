import {CHOOS_BASE} from '../actions/choose'

export default function (state = [], action) {
    switch (action.type) {
      case CHOOSE_BASE:
      return action.payload
      default:
        return state
    }
  }