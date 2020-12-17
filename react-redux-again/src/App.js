import React from 'react';
import Counter from './components/Counter';
import Logged from './components/Logged';
import Name from './components/Name';
import './App.css';

function App() {
  return (
    <div>
      <Counter />
      <Logged />
      <Name />
    </div>
  );
}

export default App;
