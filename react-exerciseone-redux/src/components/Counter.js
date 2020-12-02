import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
    const counter = useSelector(state => state.counterReducer);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch({
            type: 'INCREMENT',
        })
    }

    const decrement = () => {
        dispatch({
            type: 'DECREMENT',
        })
    }

    return (
        <div>
            <h1>Counter {counter}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Counter
