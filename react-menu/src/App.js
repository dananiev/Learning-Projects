import React, { useState, useEffect } from 'react';
import Menu from './components/Menu';
import Volumes from './components/Volumes';
import './App.css';

const url = 'https://api.punkapi.com/v2/beers';

function App() {
  const [beerItems, setBeerItems] = useState([]);
  let beerItemsCopy = [...beerItems];
  const firstBrewed = ['all', ...new Set(beerItemsCopy.map((beerItemCopy) => beerItemCopy.first_brewed))];
  

  const fetchBeers = async () => {
    const response = await fetch(url);
    const items = await response.json();
    setBeerItems(items);
  }

  useEffect(() => {
    fetchBeers();
  }, [])

  const filterBeers = (first_brewed) => {
    if (first_brewed === 'all') {
      setBeerItems(beerItemsCopy);
      return;
    }
    const newItems = beerItemsCopy.filter((beerItemCopy) => beerItemCopy.first_brewed === first_brewed);
    setBeerItems(newItems);
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our beers</h2>
          <div className='underline'></div>
        </div>
        <Volumes firstBrewed={firstBrewed} filterBeers={filterBeers} />
        <Menu beerItems={beerItems} />
      </section>
    </main>
  );
}

export default App;
