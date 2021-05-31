import {combineReducers} from 'redux'
import RegisterReducer from './Register'
import LoginReducer from './Login'
import HomeReducer from './Home'

export default combineReducers({
    RegisterReducer,
    LoginReducer,
    HomeReducer
    
})