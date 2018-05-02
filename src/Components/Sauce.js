import React, {PureComponent} from 'react'
//import PropTypes from 'prop-types'
//import { RadioGroup, RadioButton, ReversedRadioButton } from 'react-radio-buttons'
import {sauce} from './Classes'
import {chooseSauce} from '../actions/choose'
//import store from '../store'
import {connect} from 'react-redux'


class Sauce extends PureComponent{
    constructor(props) {
        super(props);
          this.state = {value:'id'}
        
            this.handleChange = this.handleChange.bind(this);
            //this.handleSubmit = this.handleSubmit.bind(this);
              }
      
      handleChange= (event)=>{
      event.preventDefault()
      }

      handleChange(event){
        this.setState({value:event.target.value})
        //store.dispatch(chooseSauce({value:event.target.value}))
      }
      

        render(){
          return(
            <div>
              <h2>Choose Your Sauce:</h2> {
              sauce.map((sauce) => {
                  return <p key={sauce.id}>
                    <label>
                      {sauce.name} {sauce.style}  &euro; {sauce.price}
                      <input type="radio" name="sauce" onChange={() => this.props.chooseSauce(sauce)}/>
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
            bases: state.sauce
        }
    }
      export default connect(mapStateToProps, {chooseSauce} )(Sauce)
 
