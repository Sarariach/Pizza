import React, { Component } from 'react';
import Sauce from './Components/Sauce'
import Base from './Components/Base';
import  Toppings from './Components/Toppings';
import Drone from './Components/Drone';



class App extends Component {
  render() {
    return (
      <div >
       
        <Base />
        <Sauce />
        <Toppings />
        <Drone />
        
      </div>
    );
  }
}

export default App;
