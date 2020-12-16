import React, { useState } from 'react';
import Note from './Note';
import { useSelector } from 'react-redux'
import AddNote from './AddNote';

const Scale = () => {
    const allScales = useSelector(state => state.scaleReducer);
    const [add, setAdd] = useState(false);
    return (
        <div className='scale'>
            <h2>Notes</h2>
            <button onClick={() => setAdd(!add)}>add note</button>
            {add && <AddNote />}
            {allScales.map(scale => {
                return <Note key={scale.id} id={scale.id} name={scale.name} />
            })}
        </div>
    )
}

export default Scale;