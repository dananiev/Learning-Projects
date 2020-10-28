import React, { useState, useEffect } from 'react'

const UseEffectBasics = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        console.log('call UseEffect')
        if (value >= 1) {
            document.title = `New Messages(${value})`
        }
    }, [value])

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={() => setValue(value + 1)}>Click me</button>
        </div>
    )
}

export default UseEffectBasics;
