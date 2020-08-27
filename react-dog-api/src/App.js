import React, { useState, useEffect } from 'react';
import DogList from './components/DogList';
import './App.css';

function App() {
  const [dogPictures, setDogPictures] = useState([])

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random/10')
      .then(res => res.json())
      .then(data => setDogPictures(data.message))
  }, [])

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Welcome To Dog World</h1>
      <DogList dogPictures={dogPictures} />
    </div>
  );
}

export default App;
