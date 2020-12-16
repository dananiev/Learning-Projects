import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteNote } from '../actions/actions';

const Note = (props) => {
    const dispatch = useDispatch();
    const deleteN = () => {
        dispatch(deleteNote({id: props.id}));
        // dispatch({
        //     type: 'DELETE_NOTE',
        //     payload: {
        //         id: props.id
        //     }
        // })
    }

    return (
        <div className='note'>
            <h1>note: {props.name}</h1>
            <button onClick={(e) => deleteN(e)}>delete</button>
        </div>
    )
}

export default Note;