import React from 'react'

const Tweet = ({ name, text }) => (
    <div className='tweet'>
        <h1>Name: {name}</h1>
        <h2>Tweet: {text}</h2>
    </div>
)

export default Tweet;
