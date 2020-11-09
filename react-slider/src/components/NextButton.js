import React from 'react'
import { FiChevronRight } from 'react-icons/fi';

const NextButton = ({ index, setIndex }) => {
    return (
        <button 
            className='next'
            onClick={() => setIndex(index + 1)}
        >
            <FiChevronRight />
        </button>
    )
}

export default NextButton
