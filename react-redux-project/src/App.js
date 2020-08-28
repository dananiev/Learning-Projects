import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <div className='App'>
      <h1>Redux Movies</h1>
      <div className='container'>
        <MovieList />
        <MovieDetails />
      </div>
    </div>
  );
}

export default App;
