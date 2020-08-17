import React from 'react'
import Tweet from './Tweet';

const Tweets = () => {
    const tweets = [
        {
          name: 'React',
          text: 'Hello, my name is React'
        },
        {
          name: 'Angular',
          text: 'Hello, my name is Angular'
        },
        {
          name: 'Vue',
          text: 'Hello, my name is Vue'
        }
    ];

    return (
        <section>
            {tweets.map(tweet => (
                <Tweet name={tweet.name} text={tweet.text} />
            ))}
        </section>
    )
}

export default Tweets;