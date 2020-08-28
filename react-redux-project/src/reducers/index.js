import { combineReducers } from 'redux';

const moviesReducer = () => {
    return [
        { title: 'Spider-Man', releaseDate: '05-07-2017', rating: 7.4 },
        { title: 'Aquaman', releaseDate: '12-07-2010', rating: 7 },
        { title: 'Black Panther', releaseDate: '02-13-2015', rating: 5.7 },
        { title: 'Rambo', releaseDate: '05-11-2012', rating: 8.9 },
        { title: 'Die Hard', releaseDate: '08-05-2009', rating: 8.2 }
    ]
} 

const selectedMovieReducer = (state = null, action) => {
    switch (action.type) {
        case 'MOVIE_SELECTED':
            return action.payload
        default:
            return state

    }
}

export default combineReducers({
    movies: moviesReducer,
    selectedMovie: selectedMovieReducer
})