import React, { useState, useEffect } from 'react'

const Item = () => {
    const [size, setSize] = useState(window.innerWidth);

    const checkSize = () => {
        setSize(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', checkSize);

        return () => {
            window.addEventListener('resize', checkSize);
        }
    }, [])

    return (
        <div>
            <h1>Window</h1>
            <h2>Size: {size}px</h2>
        </div>
    )
}

export default Item;