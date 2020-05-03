import React from 'react'
import FancyBorder from './FancyBorder'

export default function Dialog(props) {
    return (
        <FancyBorder color='blue'>
            <h1 className='Dialog-title'>{props.title}</h1>
            <p className='Dialog-message'>{props.message}</p>
            <ul className='Machinery'>
                <li>{props.car}</li>
                <li>{props.train}</li>
                <li>{props.airplane}</li>
            </ul>
        </FancyBorder>
    );
}