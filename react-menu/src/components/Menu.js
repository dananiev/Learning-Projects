import React from 'react'

const Menu = ({ beerItems }) => {
    return (
        <div className='section-center'>
            {beerItems.map((beerItem) => {
                const { id, name, image_url, description, abv } = beerItem;
                return (
                    <article key={id} className='menu-item'>
                        <img src={image_url} alt={name} className='photo' />
                        <div className='item-info'>
                            <header>
                                <h4>{name}</h4>
                                <h4 className='abv'>{abv}</h4>
                            </header>
                            <p className='item-text'>{description}</p>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}

export default Menu;
