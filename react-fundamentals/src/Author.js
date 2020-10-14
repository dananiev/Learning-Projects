import React from 'react'

function Author({ author }) {
    return (
        <div>
            <h4
                style={{ color: 'rgb(120, 120, 120)', fontSize: '12px', marginTop: '5px' }}    
            >
                {author}
            </h4>
        </div>
    )
}

export default Author;