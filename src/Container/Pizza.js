import React, {PureComponent} from 'react'
//import {connect} from 'react-redux'
import Sauce from '../Components/Sauce'
import Base from '../Components/Base'
import Toppings from '../Components/Toppings'
import PizzaConfigurator from '../Components/PizzaConfigurator'
import Drone from '../Components/Drone'

export default class Pizza extends PureComponent {
    render() {
        return (
        <div>
            <br />
            <Base className={'base'}/>
            <br />
            <Sauce/>
            <br />
            <Toppings />
            <br />
            <Drone />
            <br /> 
            <PizzaConfigurator />
            <br /> 
        </div>
        )
    }
}