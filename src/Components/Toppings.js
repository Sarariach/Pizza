import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { RadioGroup, RadioButton, ReversedRadioButton } from 'react-radio-buttons'



export class Toppings extends PureComponent{
    constructor(props) {
        super(props);
                this.state = {
                  radioState: true
                }
              }

  

    render() {


return (
<RadioGroup 
name= 'Toppings' 
selectedValue={this.state.selectedValue}
onChange={ this.handleChange } horizontal>
  <RadioButton value="Pineapple">
  Pineapple
  </RadioButton>
  <RadioButton value="Corn">
  Corn
  </RadioButton>
  <RadioButton value="Olives (green)">
  Olives (green)
  </RadioButton>
  <RadioButton value="Red onion">
  Red onion
  </RadioButton>
  <RadioButton value="Spinach">
  Spinach
  </RadioButton>
  <RadioButton value="Cherry tomatoes">
  Cherry tomatoes
  </RadioButton>
  <RadioButton value="Chicken">
  Chicken
  </RadioButton>
</RadioGroup>

)}
}