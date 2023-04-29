import { combineReducers } from 'redux';
import MaterialReducer from './MaterialReducer';
import LoginReducer from './LoginReducer';
import PotionReducer from './PotionReducer';

const allReducer = combineReducers({
    MaterialReducer,
    LoginReducer,
    PotionReducer
})

export default allReducer;