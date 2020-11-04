import React, { useState, useEffect } from 'react';
import Review from './Review';
import './App.css';

const url = 'https://api.punkapi.com/v2/beers';

function App() {
  const [beers, setBeers] = useState([]);

  const fetchBeers = async () => {
    const response = await fetch(url);
    const items = await response.json();
    setBeers(items);
  }

  useEffect(() => {
    fetchBeers();
  }, [])

  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>our reviews</h2>
          <div className='underline'></div>
        </div>
        <Review beers={beers} />
      </section>
    </main>
  );
}

export default App;
