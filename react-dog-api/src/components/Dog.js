import React from 'react'

const Dog = ({ url }) => {
    return (
        <div className='child'>
            <img style={{ height: 300, width: 300 }} src={url} alt='it should display dogs' />
        </div>
    )
}

export default Dog
