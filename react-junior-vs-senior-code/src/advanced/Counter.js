import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Counter({ initialCount }) {
    const [count, setCount] = useState(initialCount);

    function decrementCount() {
        setCount(count - 1)
    }

    function incrementCount() {
        setCount(count + 1);
    }

    return (
        <div>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </div>
    )
}

Counter.propTypes = {
    initialCount: PropTypes.number
}

export default Counter;
