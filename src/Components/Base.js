import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { RadioGroup, RadioButton, ReversedRadioButton } from 'react-radio-buttons'
import {connect} from 'react-redux'
import {base} from './Classes'
import store from '.store'

export class Base extends PureComponent{
  constructor(props) {
      super(props);
        this.state = { value: ''};
            
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
          }

  handleChange(event){
    this.setState({value:event.target.value})
    store.dispatch(chooseBase({value:event.target.value}))
  }
  handleSubmit= (event)=>{
    event.preventDefault
  }
  
  render(){
    return(
      <div>
        <h2>Choose Your Base:</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
        <label></label>

        </form>
      </div>
    )
  }
  
  
    


{/* // return (
// <RadioGroup 
// name= 'Base' 
// selectedValue={this.state.selectedValue}
// onChange={ this.handleChange } horizontal>
//   <RadioButton value={this.id}>
//   25cm NY Style € 8,99
//   </RadioButton>
//   <RadioButton value="  30cm NY Style € 11,49">
//   30cm NY Style € 11,49
//   </RadioButton>
//   <RadioButton value="  35cm NY Style € 13,49">
//   35cm NY Style € 13,49
//   </RadioButton>
//   <RadioButton value="  20cm NY Style € 6,45">
//   20cm NY Style € 6,45
//   </RadioButton>
// </RadioGroup>

// )}
// } */}






// export class Base extends PureComponent{

//     
//     onSubmit(event) {
//         event.preventDefault();
//       }
//     toggle(event) {
//       this.setState({
//         checkboxState: !this.state.checkboxState
//       });
//     }
//     render() {
//         const checkedOrNot = [];
//         checkedOrNot.push(
//           <p>{this.state.checkboxState ? 'Unchecked' : 'Checked'}</p>
//         );
//         const checkbox = (
//           <span>
//             <input 
//             type="radio"
//             onClick={this.toggle.bind(this)}
//             />
//             <label>1. 25cm NY Style € 8,99</label>
//             <br />
//             <input 
//             type="radio"
//             onClick={this.toggle.bind(this)}
//             />
//             <label>2. 30cm NY Style € 11,49</label>
//             <br />
//             <input 
//             type="radio"
//             onClick={this.toggle.bind(this)}
//             />
//             <label>3. 35cm NY Style € 13,49</label>
//             <br />
//             <input 
//             type="radio"
//             onClick={this.toggle.bind(this)}
//             />
//             <label>4. 20cm NY Style € 6,45</label>
//           </span>
//         );
    
//         return (
//           <div>
//             <form onSubmit={this.onSubmit.bind(this)}>
//               {checkbox}
//               <button type="submit">Submit</button>
//             </form>
//             {checkedOrNot}
//           </div>
//         );
//       }
//     }
    
