import React from 'react'
import HeroSection from '../HeroSection'
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour } from './Data';
import Pricing from '../Pricing';


function Home() {
    return (
        <div>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjTwo} />
            <Pricing />
            <HeroSection {...homeObjFour} />
        </div>
    )
}

export default Home
