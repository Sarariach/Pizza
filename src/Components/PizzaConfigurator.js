import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Base from './Base'
import Drone from './Drone'
import Sauce from './Sauce'
import Toppings from './Toppings'
import { pizzaBase } from './Classes';


class PizzaConfigurator extends PureComponent{
    
    //state = {}
//  calculatePrice = (base = 0, sauce = 0, toppings = 0, drone = false) => {
//         Object.keys(this.props.id).map(this.props.price)
//         // from pizza base etc, selec the id given by the state, and return the price from that object
//         const result = base + sauce + toppings
//         console.log(result)
//         const turbo = ((result)/100) * 10
//         if ( drone===true){
//         return turbo + result
//         } else {
//         return result        
//         }
//     } 
// }
    render(){
        console.log(this.props.toppings)
    // const base = this.props.base
    // const sauce = this.props.sauce
    // const toppings = this.props.toppings
    // const drone = this.props.drone // needs to be true or false
        let price = 0
    if (this.props.drone === true) {
        price= (this.props.base.price + this.props.sauce.price + ((this.props.toppings).length * 0.5))+ ((this.props.base.price + this.props.sauce.price + (this.props.toppings).length * 0.5))*0.1   
    }else if (this.props.toppings) {
        price =  (this.props.base.price + this.props.sauce.price + ((this.props.toppings).length * 0.5))
    } else if (this.props.sauce.price) {
        price = (this.props.base.price + this.props.sauce.price)
    } else if (this.props.base.price) {
        price = this.props.base.price
    } else {
        price = 0
    }

    return(
        <div>
            <h2>Your Pizza:</h2>
            {/* <p> {this.props.pizzaBase} </p>
            <p> {this.props.sauce} </p>
            <p> {this.props.toppings[0]} </p>
            <p> {this.props.toppings[1]} </p>
            <p> {this.props.toppings[2]} </p> */}
           {/* //<p> {drone} </p> */}
           {console.log(Number(this.props.base.price))}
         <p>{price}</p>
        </div>
    )
}
}

function mapStateToProps(state) {

    return{
        base:state.bases,
        sauce:state.sauce,
        toppings:state.toppings,
        drone:state.drone

    }
}
export default connect(mapStateToProps)(PizzaConfigurator)
