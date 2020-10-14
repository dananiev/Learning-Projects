import React from 'react'
import Image from './Image';
// import Title from './Title';
import Author from './Author';
import Language from './Language';

function Book({ author, title, img, language }) {
    const sayHello = (e) => {
        e.preventDefault();
        alert('hello');
        console.log(e.target);
    }

    const complexExample = (author) => {
        console.log(author)
    }

    return (
        <article className='book' onMouseOver={() => {console.log(title)}}>
            <Image img={img} />
            {/* <Title title={title} /> */}
            <h1 onClick={() => console.log(title)}>{title}</h1>
            <Author author={author} />
            <Language language={language} />
            <button type='button' onClick={sayHello}>Click Me</button>
            <button type='button' onClick={() => complexExample(author)}>Complex Example</button>
        </article>
    )
}

export default Book;
