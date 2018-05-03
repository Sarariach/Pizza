import {CHOOSE_TOPPINGS} from '../actions/choose'
import {DELETE_TOPPING} from '../actions/choose'
//import {toppings} from '../Components/Classes'

export default function (state = [], action) {
    switch (action.type) {
      case CHOOSE_TOPPINGS:
        if (state.length < 3 ){
          console.log('hello',action.payload)
          return state.concat(action.payload)
        } else if (state.includes(action.payload)){
          //window.alert('Max three toppings allowed')
          return state.splice(action.payload)
        }
      
      

      case DELETE_TOPPING:
      return state.splice(1)
      default:
        return state
    }
  }
