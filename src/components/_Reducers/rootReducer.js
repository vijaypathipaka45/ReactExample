import {combineReducers} from 'redux';
import CounterReducer from './CounterReducer';
import ResultsReducer from './ResultsReducer';
import LoginReducer from './LoginReducer';
import TakeTestReducer from './TakeTestReducer';

const rootReducer=combineReducers({
    ctr:CounterReducer,
    res:ResultsReducer,
    LoginReducer,
    TakeTestReducer
})

export default rootReducer;