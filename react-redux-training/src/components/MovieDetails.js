import React from 'react'
import { useDispatch } from 'react-redux'

const MovieDetails = (props) => {
    const dispatch = useDispatch();
    const deleteMovie = () => {
        dispatch({
            type: 'DELETE_MOVIE',
            payload: {
                id: props.id
            }
        })
    }

    return (
        <div className={'movies-wrapper'}>
            <p>Movie Details: {props.title}</p>
            <p>ReleaseDate: {props.releaseDate}</p>
            <button onClick={deleteMovie}>Delete</button>
        </div>
    )
}

export default MovieDetails;