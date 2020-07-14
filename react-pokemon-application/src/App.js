import React, { useState, useEffect } from 'react';
import PokemonList from './components/PokemonList'
import Pagination from './components/Pagination'

function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(currentPageUrl)
      .then(response => response.json())
      .then(json => {
        setLoading(false)
        setNextPageUrl(json.next)
        setPrevPageUrl(json.previous)
        setPokemon(json.results.map(p => p.name))
      })
  }, [currentPageUrl])

  // Clean up
  // return () => {}

  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }

  if (loading) return 'Loading...'

  return (
    <div>
      <PokemonList pokemon={pokemon} />
      <Pagination 
        gotoNextPage={nextPageUrl ? goToNextPage : null} 
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null} 
      />
    </div>
  );
}

export default App;
