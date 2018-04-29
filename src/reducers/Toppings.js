import {CHOOSE_TOPPINGS} from '../actions/choose'

export default function (state = [], action={}) {
    switch (action.type) {
      case CHOOSE_TOPPINGS:
      return action.payload.value
      default:
        return state
    }
  }