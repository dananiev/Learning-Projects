import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(4)
  const [color, setColor] = useState('orange')

  function decrementCount() {
    setCount(prevCount => prevCount - 1);
    setColor('red')
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1)
    setColor('yellow')
  }

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{color}</span>
      <span>{fruit}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;
