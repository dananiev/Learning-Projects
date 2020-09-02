import React from 'react'
import './Cards.css';
import CardItem from './CardItem'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out this EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                            src='https://i.pinimg.com/originals/6b/c3/ef/6bc3ef4276a1edce15d8c2c9802d6de2.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon jungle'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem 
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1C4wRoEWujUXZyiaNADdJPvza6WJqVpogJA&usqp=CAU'
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDH1jgbrkqOaZgCcMsfEEfwKUDHyZ3PZIQJA&usqp=CAU'
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem 
                            src='https://www.deccanherald.com/sites/dh/files/article_images/2020/05/19/iStock-1161036996-1528255318-1584167888.jpg'
                            text='Cool experience on Top of the Himalayan Mountains'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem 
                            src='https://cdn.mos.cms.futurecdn.net/vFEV8GdLCmReRcCJgCMsQ5-1200-80.jpg'
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
