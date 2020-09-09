import React, { useState } from 'react'
import './TourList.scss';
import Tour from '../tour/Tour';
import { tourData } from '../tourData';

function TourList() {
    const [tours, setTours] = useState(tourData);

    const removeTour = (id) => {
        const cityTours = tours;
        const sortedTours = cityTours.filter(cityTour => cityTour.id !== id);
        setTours(sortedTours);
    }

    return (
        <section className='tourlist'>
            {tours.map(tour => {
                return <Tour 
                    key={tour.id} 
                    tour={tour} 
                    removeTour={removeTour}
                />
            })}
        </section>
    )
}

export default TourList
