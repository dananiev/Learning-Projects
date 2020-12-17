import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { signIn } from '../actions/actions';

const Logged = () => {
    const dispatch = useDispatch();
    const logged = useSelector(state => state.isLoggedReducer);

    return (
        <div>
            <button onClick={() => dispatch(signIn())}>Click me</button>
            <h1>{logged ? 'you are logged in' : 'you are not logged in'}</h1>
        </div>
    )
}

export default Logged
