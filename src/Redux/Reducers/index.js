import carReducer from './carReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    car: carReducer
})

export default rootReducer