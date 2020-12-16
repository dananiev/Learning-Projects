import {combineReducers} from 'redux';
import noteReducer from './noteReducer';
import scaleReducer from './scaleReducer';

const rootReducers = combineReducers({
    noteReducer,
    scaleReducer
})

export default rootReducers;