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

  handleChangeToppings = (e) => {
    if (e.target.checked) {
      store.dispatch(chooseToppings(e.target.value))
    } else {
      store.dispatch(deleteTopping(e.target.value));
    }
    }
    //store.dispatch(chooseToppings({value:event.target.value}))
  
  
  render(){
    return(
      <div>
        <h2>Choose a maximum of 3 Toppings:</h2> {
        toppings.map((toppings) => {
            return <p key={toppings.id}>
              <label>
                {toppings.name} {toppings.style}  &euro; {toppings.price}
                <input type="checkbox" name="base" onChange={()=>this.props.chooseToppings(toppings)}/>
              </label>
            </p>
          })
        }
        
      </div>
        )
  }
}
  
const mapStateToProps = function (state, props) {
  return {
      bases: state.toppings
  }
}

export default connect( mapStateToProps, {chooseToppings, deleteTopping})(Toppings)
    