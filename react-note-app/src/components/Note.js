import React, { useContext } from 'react';
import NotesContext from '../context';

function Note({ note }) {
    const { dispatch } = useContext(NotesContext); 

    return (
        <div className='note'>
            <p>{note.text}</p>
            <div className='btn-container'>

                <button 
                    className='edit'
                    onClick={() => dispatch({ type: 'SET_CURRENT_NOTE', payload: note })}
                >
                    Edit
                </button>

                <button 
                    className='delete'
                    onClick={() => dispatch({ type: 'DELETE_NOTE', payload: note.id })}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Note;