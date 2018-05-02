import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Base from './Base'
import Drone from './Drone'
import Sauce from './Sauce'
import Toppings from './Toppings'
import { pizzaBase } from './Classes';


class PizzaConfigurator extends PureComponent{

    calculatePrice (){
    (base = 0, sauce = 0, toppings = 0, drone = false, )=> {
        const result = base.price + sauce.price + toppings.price
        const turbo = ((result)/100) * 10
        if ( drone===true){
        return 
        turbo
        } else {
        return 
        const resultWithTurbo = result + turbo
    //     console.log(turbo, result, resultWithTurbo)
        // add return statement
        
        }}}
    render(){
    // const base = this.props.base
    // const sauce = this.props.sauce
    // const toppings = this.props.toppings
    // const drone = this.props.drone // needs to be true or false

    return(
        <div>
            <h2>Your Pizza:</h2>
            <p> {this.props.pizzaBase} </p>
            <p> {this.props.sauce} </p>
            <p> {this.props.toppings[0]} </p>
            <p> {this.props.toppings[1]} </p>
            <p> {this.props.toppings[2]} </p>
           {/* //<p> {drone} </p> */}
         <p>Price: {this.calculatePrice()}</p>
        </div>
    )
}
}
function mapStateToProps(state) {
    return{
        base:state.base,
        sauce:state.sauce,
        toppings:state.toppings,
        drone:state.drone

    }
}
export default connect(mapStateToProps)(PizzaConfigurator)
