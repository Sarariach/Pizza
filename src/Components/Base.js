import React, {PureComponent} from 'react'
//import PropTypes from 'prop-types'
//import {RadioGroup, RadioButton, ReversedRadioButton} from 'react-radio-buttons'
import {connect} from 'react-redux'
import {pizzaBase} from './Classes'
// import store from '../store'
import {chooseBase} from '../actions/choose'

class Base extends PureComponent{
  constructor(props) {
      super(props);
        this.state = {value:'id'};
        // console.log(chooseBase(pizzaBase.id))

        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
          }

  handleChange(event){
    event.preventDefault();
    //object with info from selection
    this.setState({value:event.target.value})
    // store.dispatch(chooseBase({value:event.target.value}))
  }
  // handleSubmit= (event)=>{
  //   event.preventDefault
  // }
  
  render(){
    // console.log(this.props)
    return(
      
      <div>
        
        <h2>Choose Your Base:</h2> {
        pizzaBase.map((pizzaBase) => {
            return <p key={pizzaBase.id}>
              <label>
                {pizzaBase.name} {pizzaBase.style}  &euro; {pizzaBase.price}
                <input type="radio" name="base" onChange={()=> this.props.chooseBase(pizzaBase)}/>
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
        bases: state.bases
    }
}

export default connect(mapStateToProps, {chooseBase} )(Base)
    
