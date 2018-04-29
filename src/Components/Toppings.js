import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { RadioGroup, RadioButton, ReversedRadioButton } from 'react-radio-buttons'
import store from '../store'
import {chooseToppings} from '../actions/choose'
import {connect} from 'react-redux'
import {toppings} from './Classes'




export class Toppings extends PureComponent{
  constructor(props) {
      super(props);
        this.state = { value: ''};
            
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
          }

  handleChange(event){
    this.setState({value:event.target.value})
    store.dispatch(chooseToppings({value:event.target.value}))
  }
  handleSubmit= (event)=>{
    event.preventDefault
  }
  
  render(){
    return(
      <div>
        <h2>Choose a maximum of 3 Toppings:</h2> {
        toppings.map((toppings) => {
            return <p key={toppings.id}>
              <label>
                {toppings.name} {toppings.style}  &euro; {toppings.price}
                <input type="checkbox" name="base" onSubmit={() => this.props.chooseToppings(toppings) ===3}/>
              </label>
            </p>
          })
        }
        
      </div>
        )
  }
}
  


export default connect( null, {chooseToppings} )(Toppings)
    