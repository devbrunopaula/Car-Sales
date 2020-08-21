import * as actions from '../Actions/carTypes'


export const addFeautures = (newFeature, price) => {
    return {
        type: actions.ADD_FEAUTURES,
        newFeature,
        price
    }
}



export const removeFeautures = (id, price) => {
    console.log('Action', id + ' ' + price)
    return {
        type: actions.REMOVE_FEAUTURES,
        id,
        price
    }
}
