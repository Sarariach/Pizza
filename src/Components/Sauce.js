import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { RadioGroup, RadioButton, ReversedRadioButton } from 'react-radio-buttons'
import {sauce} from './Classes'
import {chooseSauce} from '../actions/choose'
import store from '../store'
import {connect} from 'react-redux'





export class Sauce extends PureComponent{
    constructor(props) {
        super(props);
          this.state = {vale:''}
        
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
              }
    
      handleChange(event){
        this.setState({value:event.target.value})
        store.dispatch(chooseSauce({value:event.target.value}))
      }
      handleSubmit= (event)=>{
        event.preventDefault
      }

        render(){
          return(
            <div>
              <h2>Choose Your Sauce:</h2> {
              sauce.map((sauce) => {
                  return <p key={sauce.id}>
                    <label>
                      {sauce.name} {sauce.style}  &euro; {sauce.price}
                      <input type="radio" name="sauce" onSubmit={() => this.props.chooseSauce(sauce)}/>
                    </label>
                  </p>
                })
              }
              
            </div>
              )
        }
      }

      export default connect( null, {chooseSauce} )(Sauce)
 
