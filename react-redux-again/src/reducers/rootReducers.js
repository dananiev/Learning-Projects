import counterReducer from './counterReducer';
import isLoggedReducer from './isLoggedReducer';
import nameReducer from './nameReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counterReducer,
    isLoggedReducer,
    nameReducer
});

export default allReducers;