import React from 'react'
import BookCard from './BookCard';

const BookList = ({ books }) => {
    return (
        <div className='list'>
            {books.map((book, i) => {
                return <BookCard
                            key={i}
                            image={book.volumeInfo.imageLinks.thumbnail} 
                            title={book.volumeInfo.title} 
                            author={book.volumeInfo.authors} 
                            published={book.volumeInfo.publishedDate} 
                        />
            })}
        </div>
    )
}

export default BookList
