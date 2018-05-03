import React, {PureComponent} from 'react'
//import PropTypes from 'prop-types'
//import { RadioGroup, RadioButton, ReversedRadioButton } from 'react-radio-buttons'
import store from '../store'
import {chooseToppings, deleteTopping} from '../actions/choose'
import {connect} from 'react-redux'
import {toppings} from './Classes'




class Toppings extends PureComponent{
  constructor(props) {
      super(props);
        this.state = { value: 'id'};
            
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
          }

  handleChange= (event)=>{
  event.preventDefault()
          }

          resetForm =(e) => {
            e.nativeEvent.path[3].reset()
          }

  handleChangeToppings = (e) => {
    console.log(e.nativeEvent.path)
    
    
    if (e.target.checked === true) {
      store.dispatch(chooseToppings(e.target.value))
    } else {
      store.dispatch(deleteTopping(e.target.value));
    }
    if (this.props.bass === 3)
    return       this.resetForm(e)

    }
    //store.dispatch(chooseToppings({value:event.target.value}))
  
  
  render(){
    return(
      <form>
        <h2>Choose a maximum of 3 Toppings:</h2> {
        toppings.map((toppings) => {
            return <p key={toppings.id}>
              <label>
                {toppings.name} {toppings.style}  &euro; {toppings.price}
                <input type="checkbox" name="base" value={toppings.price} onChange={(e)=>this.handleChangeToppings(e)}/>
              </label>
            </p>
          })
        }
        
      </form>
        )
  }
}
  
const mapStateToProps = function (state, props) {
  return {
      bases: state.toppings
  }
}

export default connect( mapStateToProps, {chooseToppings, deleteTopping})(Toppings)
    