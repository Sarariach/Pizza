import {CHOOSE_TOPPINGS} from '../actions/choose'
import {DELETE_TOPPING} from '../actions/choose'

export default function (state = [], action={}) {
    switch (action.type) {
      case CHOOSE_TOPPINGS:
      if (state.lenght <3){
        return state.concat(action.payload)
      } else {
        return state
      }
      case DELETE_TOPPING:
      return state.filter(topping => topping !== action.payload)
      default:
        return state
    }
  }