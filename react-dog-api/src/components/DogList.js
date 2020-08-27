import React from 'react'
import Dog from './Dog';
import './DogList.css';

const DogList = ({ dogPictures }) => {

    const dogsArray = dogPictures.map((dogURL, id) => {
        return <Dog url={dogURL} key={id} />
    })

    return (
        <div className='container'>
            {dogsArray}
        </div>
    )
}

export default DogList
