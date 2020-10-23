import { combineReducers } from 'redux';
import moviesReducer from './MoviesReducer';

const rootReducer = combineReducers({
    movies: moviesReducer
})

export default rootReducer;