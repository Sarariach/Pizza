export const CHOOSE_BASE = 'CHOOSE_BASE'
export const CHOOSE_SAUCE= 'CHOOSE_SAUCE'
export const CHOOSE_TOPPINGS= 'CHOOSE_TOPPINGS'
export const CHOOSE_DRONE = "CHOOSE_DRONE"
export const DELETE_TOPPING = 'DELETE_TOPPING'
// action: does something -- FUNCTION 
// reducer: shows what has been done or the result of what has been done -- OBJECT
export const chooseBase =(bases) =>{
    return{

        type: CHOOSE_BASE,
        payload:bases
    }
}

export const chooseSauce =(sauce) =>{
    return{
        type: CHOOSE_SAUCE,
        payload:sauce
    }
}

export const chooseToppings =(toppings)  => {
    console.log(toppings)
    // const toppingsNumber = Number(toppings)
    return {
        type: CHOOSE_TOPPINGS,
        payload: toppings
    }
}

export const chooseDrone =(drone) =>{
    return{
        type: CHOOSE_DRONE,
        payload:drone
    }
}

export const deleteTopping =(topping) =>{
    return{
        type: DELETE_TOPPING,
        payload:topping
    }
}

// export const getPrice = (price) =>{

// }