import { combineReducers } from 'redux';
import activitiesReducer from './activitiesReducer';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
    activitiesReducer,
    counterReducer
}) 

export default rootReducer;