import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { RadioGroup, RadioButton, ReversedRadioButton } from 'react-radio-buttons'



export class Sauce extends PureComponent{
    constructor(props) {
        super(props);
                this.state = {
                  radioState: true
                }
              }

  

    render() {


return (
<RadioGroup 
name= 'Sauce' 
selectedValue={this.state.selectedValue}
onChange={ this.handleChange } horizontal>
  <RadioButton value="White sauce">
  White sauce
  </RadioButton>
  <RadioButton value="Red sauce">
  Red sauce
  </RadioButton>
  <RadioButton value=" Double red sauce € 1,00">
  Double red sauce € 1,00
  </RadioButton>
  <RadioButton value="Mix it up € 1,50 ">
  Mix it up € 1,50 
  </RadioButton>
</RadioGroup>

)}
}