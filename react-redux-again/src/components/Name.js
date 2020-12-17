import React from 'react'
import { useSelector } from 'react-redux';

const Name = () => {
    const name = useSelector(state => state.nameReducer);

    return (
        <div>
            <h1>Name: {name}</h1>
        </div>
    )
}

export default Name
