import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { RadioGroup, RadioButton, ReversedRadioButton } from 'react-radio-buttons'
import {connect} from 'react-redux'
import store from '../store'
import {chooseDrone} from '../actions/choose'

export class Drone extends PureComponent{
  constructor(props) {
      super(props);
        this.state = { value: ''};
            
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
          }

  handleChange(event){
    this.setState({value:event.target.value})
    store.dispatch(chooseDrone({value:event.target.value}))
  }
  handleSubmit= (event)=>{
    event.preventDefault
  }
  
  render(){
    return(
      <div>
        <h2>Choose turbo-drone-delivery which is an additional 10% on top of the total pizza price:</h2> {
              <label>
                <input type="radio" name="base" onSubmit={() => this.props.chooseDrone(Drone)}/>
              </label>
        
          
        }
        
      </div>
        )
  }
}
  


export default connect( null, {chooseDrone} )(Drone)