import React, { useState, useEffect } from 'react'
import Item from './Item';

const ShowHide = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <button onClick={() => setShow(!show)}>show/hide</button>
            {show && <Item />}
        </div>
    )
}

export default ShowHide;
