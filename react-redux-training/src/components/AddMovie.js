import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const AddMovie = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        title: '',
        releaseDate: ''
    });

    const handleChange = e => {
        e.persist();
        setData(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    const addMovie = () => {
        dispatch({
            type: 'CREATE_MOVIE',
            payload: {
                title: data.title,
                releaseDate: data.releaseDate
            }
        })
    }

    return (
        <div className={'add'}>
            <div className='input-section'>
                <p>Movie:</p>
                <input 
                    onChange={(e) => handleChange(e)}
                    name={'title'} 
                    placeholder={'Movie title...'} 
                />
            </div>

            <div className='input-section'>
                <p>ReleaseDate:</p>
                <input 
                    onChange={(e) => handleChange(e)}
                    name={'releaseDate'} 
                    placeholder={'Movie releaseDate...'} 
                />
            </div>

            <button onClick={addMovie}>Add Movie</button>
        </div>
    )
}

export default AddMovie;
