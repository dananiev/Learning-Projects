import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies, viewMovieInfo }) => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col s12'>
                    {movies.map((movie, i) => {
                        return (
                            <Movie 
                                key={i}
                                image={movie.poster_path} 
                                viewMovieInfo={viewMovieInfo}
                                movieId={movie.id}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MovieList;
