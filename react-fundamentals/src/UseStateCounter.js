import React, { useState } from 'react'

const UseStateCounter = () => {
    const [value, setValue] = useState(0);
    const [valueTwo, setValueTwo] = useState(0);

    const reset = () => {
        setValue(0);
    }

    const complexIncrease = () => {
        setTimeout(() => {
            // setValueTwo(valueTwo + 1)
            setValueTwo((prevState) => {
                return prevState + 1;
            })
        }, 2000)
    }

    return (
        <div>
            <section style={{ margin: '4rem 0' }}>
                <h2>Regular Counter</h2>
                <h1>{value}</h1>
                <button onClick={() => setValue(value - 1)}>decrease</button>
                <button onClick={() => setValue(value + 1)}>increase</button>
                <button onClick={reset}>reset</button>
            </section>

            <section style={{ margin: '4rem 0' }}>
                <h2>More Complex Counter</h2>
                <h1>{valueTwo}</h1>
                <button onClick={complexIncrease}>increase later</button>
            </section>
        </div>
    )
}

export default UseStateCounter;
