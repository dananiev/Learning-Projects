import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(0);

  let increment = () => {
    setCounter(counter + 1)
  }

  let toggler = () => {
    setToggle(prev => !prev);
  }

  return (
    <div className='App'>
      <h1 className={toggle ? 'active' : ''}>React</h1>
      <h2>Counter {counter}</h2>
      <button onClick={increment}>Click</button>
      <button onClick={toggler}>Toggle</button>
    </div>
  );
}

export default App;
