import React, { useState } from 'react'
import MovieDetails from './MovieDetails';
import AddMovie from './AddMovie';
import { useSelector } from 'react-redux';

const MovieList = () => {
    const allMovies = useSelector((state) => state.movies);
    const [add, setAdd] = useState(false);

    return (
        <div className={'movie-wrapper'}>
            <button onClick={() => setAdd(!add)}>Add Movie</button>
            {add && <AddMovie />}
            {allMovies.map(movie => {
                console.log(movie)
                return <MovieDetails 
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            releaseDate={movie.releaseDate}
                        />
            })}
        </div>
    )
}

export default MovieList;
