import {CHOOSE_TOPPINGS} from '../actions/choose'
import {DELETE_TOPPING} from '../actions/choose'
//import {toppings} from '../Components/Classes'

export default function (state = [], action) {
    switch (action.type) {
      case CHOOSE_TOPPINGS:
        if (state.length < 3 ){
          return state.concat(action.payload)
        } else {
          //window.alert('Max three toppings allowed')
          return state
        }
      
      

      case DELETE_TOPPING:
      return state.filter(topping => topping !== action.payload)
      default:
        return state
    }
  }
