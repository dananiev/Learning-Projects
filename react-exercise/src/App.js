import React from 'react';
import UserInfo from './UserInfo';

function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
  return (
    <div className='Comment'>

      <UserInfo user={props.author} />

      <div className='Comment-text'>
        {props.text}
      </div>

      <div className='Comment-date'>
        {formatDate(props.date)}
      </div>

    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'This animation was cool in the past',
  author: {
    name: 'Avatar',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

const Result = () => {
  return <Comment date={comment.date} text={comment.text} author={comment.author} />
}

export default Result
