import React, { useState } from 'react';
import './App.css';

const url = 'https://jsonplaceholder.typicode.com/posts';

function App() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    let amount = parseInt(count);
    if (amount <= 0) {
      amount = 1
    }
    if (amount > 99) {
      amount = 99
    }
    const response = await fetch(url);
    const items = await response.json()
    setPosts(items.slice(0, amount));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPosts();
  }

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form 
        className='lorem-form' 
        onSubmit={handleSubmit}
      >
        <label htmlFor='amount'>paragraphs:</label>
        <input 
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
        {posts.map((post, index) => {
          return <p key={index}>{post.body}</p>
        })}
      </article>
    </section>
  );
}

export default App;
