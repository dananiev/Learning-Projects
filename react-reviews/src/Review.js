import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = ({ beers }) => {
    const [index, setIndex] = useState(0);
    const { name, tagline, description, image_url } = beers[index];

    const checkNumber = (number) => {
        if (number > beers.length - 1) {
            return 0;
        }
        if (number < 0) {
            return beers.length - 1;
        }
        return number;
    }

    const prevBeer = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        })
    }

    const nextBeer = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        })
    }

    const randomBeer = () => {
        let randomNumber = Math.floor(Math.random() * beers.length);
        if (randomNumber === index) {
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
    }

    return (
        <div>
            <article className='review'>
                <div className='img-container'>
                    <img src={image_url} alt={name} className='beer-img' />
                    <span className='quote-icon'>
                        <FaQuoteRight />
                    </span>
                </div>
                <h4 className='author'>{name}</h4>
                <p className='tagline'>{tagline}</p>
                <p className='info'>{description}</p>
                <div className='button-container'>
                    <button 
                        className='prev-btn'
                        onClick={prevBeer}
                    >
                        <FaChevronLeft />
                    </button>
                    <button 
                        className='next-btn'
                        onClick={nextBeer}
                    >
                        <FaChevronRight />
                    </button>
                </div>
                <button 
                    className='random-btn'
                    onClick={randomBeer}
                >
                    Get Random Beer
                </button>
            </article>
        </div>
    )
}

export default Review;