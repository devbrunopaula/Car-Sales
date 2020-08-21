import * as actions from '../Actions/carTypes'

const initialState = {
    additionalPrice: 0,
    car: {
        price: 26000,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 100 }
    ]
};
const carReducer = (state = initialState, action) => {
    console.log('reducer aCtion', action)
    switch (action.type) {
        case actions.ADD_FEAUTURES:
            return {
                ...state,
                additionalPrice: state.additionalPrice + action.price,
                car: {
                    ...state.car,
                    features: [...state.car.features, action.newFeature]
                }
            }
        case actions.REMOVE_FEAUTURES:
            return {
                ...state,
                additionalPrice: state.additionalPrice - action.price,
                car: {
                    ...state.car,
                    features: state.car.features.filter(feature => feature.id !== action.id)
                }
            }
        default: return state
    }

}

export default carReducer