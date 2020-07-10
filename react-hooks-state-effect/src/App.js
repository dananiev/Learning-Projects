import React, { useState, useEffect } from 'react';

function App(props) {
  // const [ count, setCount ] = useState(0);

  // return (
  //   <div>
  //     <p>You clicked {count} times</p>
  //     <button onClick={() => setCount(count + 2)}>Click me</button>
  //   </div>
  // );
  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  // const [ age, setAge ] = useState(22);
  // const [ fruit, setFruit ] = useState('mango');

  // return (
  //   <div>
  //     <p>You are {age} years old and you like {fruit}</p>
  //     <h1>Next year you will be {age + 1} years old and you will still like {fruit}</h1>
  //     <button onClick={() => setAge(age + 1)}>Age</button>
  //     <button onClick={() => setFruit(`${fruit} coconut`)}>Fruit</button>
  //   </div>
  // )
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [ count, setCount ] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default App;
