import { combineReducers } from 'redux';
import MaterialReducer from './MaterialReducer';
import LoginReducer from './LoginReducer';

const allReducer = combineReducers({
    MaterialReducer,
    LoginReducer
})

export default allReducer;