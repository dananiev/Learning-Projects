import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import books from '../books';

const reducer = (state, action) => {
    if (action.type ==='ADD_ITEM') {
        const newBooks = [...state.items, action.payload];
        return {
            ...state, 
            items: newBooks, 
            isModalOpen: true, 
            modalContent: 'item added'
        }
    }

    if (action.type === 'NO_VALUE') {
        return {...state, isModalOpen: true, modalContent: 'please enter value'}
    }

    if (action.type === 'CLOSE_MODAL') {
        return {...state, isModalOpen: false}
    }

    if (action.type === 'REMOVE_ITEM') {
        const newItem = state.items.filter((item) => item.id !== action.payload)
        return {...state, items: newItem}
    }
}

const defaultState = {
    items: [],
    isModalOpen: false,
    modalContent: ''
}

const Index = () => {
    const [title, setTitle] = useState('');
    const [state, dispatch] = useReducer(reducer, defaultState);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title) {
            const newBook = { id: new Date().getTime().toString(), title }
           dispatch(
               {
                    type: 'ADD_ITEM',
                    payload: newBook
                }
            )
            setTitle('');
        } else {
            dispatch({ type: 'NO_VALUE' })
        }
    }

    const closeModal = () => {
        dispatch({ type: 'CLOSE_MODAL' })
    }

    return (
        <div>
            {state.isModalOpen && 
                <Modal 
                    closeModal={closeModal} 
                    modalContent={state.modalContent} 
                />
            }
            <form onSubmit={handleSubmit}>
                <div>
                    <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <button type='submit'>add</button>
            </form>
            {state.items.map(item => {
                return (
                    <div key={item.id}>
                        <h4>{item.title}</h4>
                        <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}>
                            remove
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default Index;
