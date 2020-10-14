import React from 'react'

function Image({ img }) {
    return (
        <div>
            <img 
                src={img}
                alt='book'
                width='200px'
                height='300px'
            />
        </div>
    )
}

export default Image;
