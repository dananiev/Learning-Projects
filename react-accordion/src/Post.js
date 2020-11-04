import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Post = ({ title, body }) => {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <div>
            <article className='post'>
                <header>
                    <h4>{title}</h4>
                    <button 
                        className='btn'
                        onClick={() => setShowInfo(!showInfo)}
                    >
                        {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </button>
                </header>
                {showInfo && <p>{body}</p>}
            </article>
        </div>
    )
}

export default Post
