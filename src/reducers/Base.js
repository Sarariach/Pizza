import {CHOOSE_BASE} from '../actions/choose'

export default function (state = [], action={}) {
 
  switch (action.type) {
      case CHOOSE_BASE:
      return action.payload.id
      default:
        return state
    }
  }
