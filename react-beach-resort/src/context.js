import React, { useState, createContext } from 'react';
import items from './data';

const RoomContext = createContext();

function RoomProvider(props) {
    const formatData = (data) => {
        let tempData = data.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url)
            let room = {...item.fields, images, id}
            return room
        })
        return tempData
    }

    const [rooms, setRooms] = useState(formatData(items));
    const [sortedRooms, setSortedRooms] = useState(formatData(items));
    const [featuredRooms] = useState(formatData(items).filter(item => item.featured === true));
    const [loading, setLoading] = useState(false);

    const getRoom = (slug) => {
        const singleRoom = rooms.find(item => item.slug === slug);
        return singleRoom
    }

    return (
        <RoomContext.Provider value={{
            rooms, 
            loading,
            featuredRooms,
            getRoom,
        }}>
            {props.children}
        </RoomContext.Provider>
    )
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
