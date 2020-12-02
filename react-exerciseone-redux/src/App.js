import React from 'react';
import Workouts from './components/Workouts';
import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Work Tracker</h1>
      <Workouts />
      <Counter />
    </div>
  );
}

export default App;
