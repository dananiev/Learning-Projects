import React, { useContext } from 'react'
import { RoomContext } from '../context';

function FeaturedRooms() {
    const {featuredRooms} = useContext(RoomContext);

    return (
        <div>
            hello from featured rooms
        </div>
    )
}

export default FeaturedRooms;
