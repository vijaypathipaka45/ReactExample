import {combineReducers} from 'redux';
import CounterReducer from './CounterReducer';
import ResultsReducer from './ResultsReducer';
import LoginReducer from './LoginReducer';

const rootReducer=combineReducers({
    ctr:CounterReducer,
    res:ResultsReducer,
    LoginReducer
})

export default rootReducer;