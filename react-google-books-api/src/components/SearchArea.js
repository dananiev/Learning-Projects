import React from 'react'

const SearchArea = ({ handleSearch, searchBook, handleSort }) => {
    return (
        <div className='search-area'>
            <form onSubmit={searchBook} action=''>
                <input onChange={handleSearch} type='text' />
                <button type='submit'>Search</button>
                <select defaultValue='Sort' onChange={handleSort}>
                    <option disabled value='Sort'>Sort</option>
                    <option value='Newest'>Newest</option>
                    <option value='Oldest'>Oldest</option>
                </select>
            </form>            
        </div>
    )
}

export default SearchArea;
