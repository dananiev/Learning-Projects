import React from 'react'
import Border from './Border'
import './Border.css'

export default function Welcome() {
    return (
        <Border color="blue">
            <h1 className='Dialog-title'>
                Welcome
            </h1>

            <p className="Dialog-message">
                Thank you for visiting our wesite
            </p>
        </Border>
    );
}