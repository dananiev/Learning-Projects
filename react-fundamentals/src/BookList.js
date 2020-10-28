import React from 'react'
import Book from './Book';
import books from './books';
import ErrorExample from './ErrorExample';
import UseStateBasics from './UseStateBasics';
import UseStateCounter from './UseStateCounter';
import UseEffectBasics from './UseEffectBasics';
import UseEffectFetchData from './UseEffectFetchData';

function BookList() {
    return (
        <div>
            <section className='booklist'>
                {books.map((book) => {
                    return (
                        <Book 
                            key={book.id}
                            {...book}
                        />
                    )
                })}
            </section>
            <ErrorExample />
            <UseStateBasics />
            <UseStateCounter />
            <UseEffectBasics />
            <UseEffectFetchData />
        </div>
    )
}

export default BookList;
