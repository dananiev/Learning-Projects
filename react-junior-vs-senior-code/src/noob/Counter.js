import React, { useState } from 'react';

function Counter({ initialCount }) {
    let [count, setCount] = useState(initialCount);

    function decrementCount() {
        count = count - 1;
    }

    function incrementCount() {
        count = count + 1;
    }

    return (
        <div>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </div>
    )
}

export default Counter;
