import React from 'react';
import Todos from './pro/Todos';
import './App.css';

function App() {
  const initialTodos = [
    {
      id: 1,
      complete: false,
      name: 'Do Laundry'
    },
    {
      id: 2,
      complete: true,
      name: 'Wash Dishes'
    },
    {
      id: 3,
      complete: false,
      name: 'Record a Video'
    }
  ] 

  return (
    <div>
      <Todos initialTodos={initialTodos} />
    </div>
  );
}

export default App;
