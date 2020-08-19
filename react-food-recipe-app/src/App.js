import React, { useState } from 'react';
import Axios from 'axios';
import Recipe from './components/Recipe';
import Alert from './components/Alert';
import {v4 as uuidv4} from 'uuid';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState('');

  const APP_ID = 'a94a225d';
  const APP_KEY = '1ab5c32c29d92843057cc03ba7c80d54';

  const url =`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async() => {
    if (query !== '') {
      const result = await Axios.get(url);
      if (!result.data.more) {
        return setAlert('No Food With Such Name');
      }
      setRecipes(result.data.hits);
      console.log(result);
      setAlert('');
      setQuery('');
    } else {
      setAlert('Please Fill The Form')
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  }

  const onChange = e => {
    setQuery(e.target.value)
  }

  return (
    <div className='App'>
      <h1>Food Searching App</h1>
      <form className='search-form' onSubmit={onSubmit}>
        {alert !== '' && <Alert alert={alert} />}
        <input 
          type='text' 
          placeholder='Search Recipe...' 
          autoComplete='off' 
          onChange={onChange} 
          value={query} 
        />
        <input type='submit' value='search' />
      </form>
      <div className='recipes'>
        {recipes !== [] && recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
      </div>
    </div>
  );
}

export default App;
