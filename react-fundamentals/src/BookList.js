import React from 'react'
import Book from './Book';
import books from './books';
import ErrorExample from './ErrorExample';
import UseStateBasics from './UseStateBasics';


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
        </div>
    )
}

export default BookList;
