import * as actions from '../Actions/carTypes'


export const addFeautures = (part) => {
    return {
        type: actions.ADD_FEAUTURES,
        payload: part
    }
}

export const removeFeautures = (id) => {
    return {
        type: actions.REMOVE_FEAUTURES,
        payload: id
    }
}