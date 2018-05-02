import React, {PureComponent} from 'react'
//import PropTypes from 'prop-types'
//import { RadioGroup, RadioButton, ReversedRadioButton } from 'react-radio-buttons'
import {connect} from 'react-redux'
//import store from '../store'
import {chooseDrone} from '../actions/choose'

class Drone extends PureComponent{
  constructor(props) {
      super(props);
        this.state = { value: ''};
            
        this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
          }
          
  handleChange= (event)=>{
  event.preventDefault
  }

  handleChange(event){
    this.setState({value:event.target.value})
    //store.dispatch(chooseDrone({value:event.target.value}))
  }
  
  
  render(){
    return(
      <div>
        <h2>Choose turbo-drone-delivery which is an additional 10% on top of the total pizza price:</h2> 
        {
          <label>
            <input type="checkbox" name="base" onChange={() => this.props.chooseDrone()}/>
          </label>
        }
      </div>
        )
  }
}
  
const mapStateToProps = function (state, props) {
  return {
      bases: state.drone
  }
}

export default connect( mapStateToProps, {chooseDrone} )(Drone)

