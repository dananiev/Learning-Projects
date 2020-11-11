import React, { useState, useEffect } from 'react'
import rgbToHex from './utils';

const SingleColour = ({ rgb, weight, index, hexColor }) => {
    const [alert, setAlert] = useState(false);
    const bcg = rgb.join(',');
    const hexValue = `#${hexColor}`

    // alternative to hexColor from the props
    // const hex = rgbToHex(...rgb)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false);
        }, 3000)
        return () => clearInterval(timeout);
    }, [alert])

    return (
        <article 
            className={`color ${index > 10 && 'color-light'}`}
            style={{backgroundColor: `rgb(${bcg})`}}
            onClick={() => {
                setAlert(true);
                navigator.clipboard.writeText(hexValue);
            }}
        >
            <p className='percent-value'>{weight}%</p>
            <p className='color-value'>{hexValue}</p>
            {alert && <p className='alert'>copied to clipboard</p>}
        </article>
    )
}

export default SingleColour
