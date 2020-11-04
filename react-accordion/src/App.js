import React, { useState, useEffect } from 'react';
import Post from './Post';
import './App.css';

const url = 'https://jsonplaceholder.typicode.com/posts';

function App() {
  const [ posts, setPosts ] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch(url)
    const items = await response.json();
    setPosts(items);
  }

  useEffect(() => {
    fetchPosts();
  }, [])

  return (
    <main>
      <div className='container'>
        <h3>posts title and body</h3>
        <section className='info'>
          {posts.map((post) => {
            return (
              <Post key={post.id} {...post} />
            )
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
