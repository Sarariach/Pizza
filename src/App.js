import React, { Component } from 'react';
import './App.css';
import {Sauce} from './Components/Sauce'
import {Base} from './Components/Base';
import {Toppings} from './Components/Toppings'



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          <h1 className="App-title">Welcome to NewAgePizza!</h1>
        </header>
        <p className="App-intro">
        <Base />
        </p>
        <p>
        <Sauce />
        </p> 
        <p>
          <Toppings />
          </p>
        
      </div>
    );
  }
}

export default App;
