import React from 'react';
import Post from './components/Post';
import PostForm from './components/PostForm';

import { Provider } from 'react-redux';

import './App.css';

import store from './store';
// const store = createStore(() => [], {}, applyMiddleware());

function App() {
  return (
    <Provider store={store} >
      <div className='App'>
        <PostForm />
          <hr />
        <Post />
      </div>
    </Provider>
  );
}

export default App;
