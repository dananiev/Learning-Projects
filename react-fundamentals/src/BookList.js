import React from 'react'
// import Book from './Book';
// import books from './books';
// import ErrorExample from './ErrorExample';
// import UseStateBasics from './UseStateBasics';
// import UseStateCounter from './UseStateCounter';
// import UseEffectBasics from './UseEffectBasics';
// import UseEffectFetchData from './UseEffectFetchData';
// import MultipleReturns from './MultipleReturns';
// import ShowHide from './ShowHide';
// import ControlledInputs from './ControlledInputs';
// import UseRefBasics from './UseRefBasics';
import Index from './useReducer/Index';

function BookList() {
    return (
        <div>
            {/*<section className='booklist'>
                {books.map((book) => {
                    return (
                        <Book 
                            key={book.id}
                            {...book}
                        />
                    )
                })}
            </section>*/}

            {/*<ErrorExample />
            <UseStateBasics />
            <UseStateCounter />
            <UseEffectBasics />
            <UseEffectFetchData />
            <MultipleReturns />
            <ShowHide />
            <ControlledInputs />
            <UseRefBasics />*/}
            <Index />
        </div>
    )
}

//////////////////////////////////////////////////////////////////////// 8:01:02

export default BookList;
