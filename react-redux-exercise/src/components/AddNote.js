import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { createNote } from '../actions/actions';

const AddNote = () => {
    const dispatch = useDispatch();
    const [note, setNote] = useState({
        name: ''
    });

    const handleChange = (e) => {
        e.persist();
        setNote(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const addNote = () => {
        dispatch(createNote({name: note.name}));
        // dispatch({
        //     type: 'CREATE_NOTE',
        //     payload: {
        //         name: note.name
        //     }
        // })
    }

    return (
        <div className='add'>
            <div className='input-section'>
                <p>Note:</p>
                <input 
                    onChange={(e) => handleChange(e)} 
                    name={'name'} 
                    placeholder={'add note...'} 
                />
            </div>

            <button onClick={addNote}>add note</button>
        </div>
    )
}

export default AddNote;