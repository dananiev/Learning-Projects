import React from 'react'

const Volumes = ({ firstBrewed, filterBeers }) => {
    return (
        <div className='btn-container'>
            {firstBrewed.map((first_brewed, index) => {
                return (
                    <button 
                        type='button' 
                        className='filter-btn'
                        key={index}
                        onClick={() => filterBeers(first_brewed)}
                    >
                        {first_brewed}
                    </button>
                )
            })}
        </div>
    )
}

export default Volumes;