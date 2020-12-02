import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from './actions/actions';
import './App.css';

function App() {
  const counter = useSelector(state => state.counterReducer);
  const isLogged = useSelector(state => state.isLoggedReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(10))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      { isLogged ? <h2>true</h2> : <h2>false</h2> }
    </div>
  );
}

export default App;
