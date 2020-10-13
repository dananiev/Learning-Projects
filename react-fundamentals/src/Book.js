import React from 'react'
import Image from './Image';
import Title from './Title';
import Author from './Author';

function Book() {
    return (
        <article className='book'>
            <Image />
            <Title />
            <Author />
        </article>
    )
}

export default Book;
