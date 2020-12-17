import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { increment, decrement } from '../actions/actions';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counterReducer);

    return (
        <div>
            <h1>Counter {counter}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}

export default Counter
