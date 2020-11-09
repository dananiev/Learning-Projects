import React, { useState, useEffect } from 'react'
import { FaQuoteRight } from 'react-icons/fa';
import PrevButton from './PrevButton';
import NextButton from './NextButton';

const url = 'https://api.punkapi.com/v2/beers'

const BeerList = () => {
    const [beers, setBeers] = useState([]);
    const [index, setIndex] = useState(0);

    const fetchBeers = async () => {
        const response = await fetch(url);
        const items = await response.json();
        setBeers(items);
    }

    useEffect(() => {
        fetchBeers();
    }, []);

    useEffect(() => {
        const lastIndex = beers.length - 1;
        if (index < 0) {
          setIndex(lastIndex);
        }
    
        if (index > lastIndex) {
          setIndex(0);
        }
    }, [index, beers])
    
    useEffect(() => {
    let slider = setInterval(() => {
        setIndex(index + 1)
    }, 3000);
    return () => clearInterval(slider);
    }, [index])

    return (
        <section className='section'>
            <div className='section-center'>
                {beers.map((beer, beerIndex) => {
                    const { id, name, description, image_url, tagline } = beer;

                    let position = 'nextSlide';
                    if (beerIndex === index) {
                        position = 'activeSlide';
                    }
                    if (beerIndex === index - 1 || (index === 0 && beerIndex === beers.length - 1)) {
                        position = 'lastSlide';
                    }

                    return (
                        <article className={position} key={id}>
                            <img src={image_url} alt={name} className='beer-img' />
                            <h4>{name}</h4>
                            <p className='tagline'>{tagline}</p>
                            <p className='description'>{description}</p>
                            <FaQuoteRight className='icon' />
                        </article>
                    )
                })}
            </div>
            <PrevButton index={index} setIndex={setIndex} />
            <NextButton index={index} setIndex={setIndex} />
        </section>
    )
}

export default BeerList
