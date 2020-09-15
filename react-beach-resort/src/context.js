import React, { useState, createContext } from 'react';

const RoomContext = React.createContext();

function RoomProvider(props) {
    const [] = useState();

    return (
        <RoomContext.Provider value={'hello'}>
            {props.children}
        </RoomContext.Provider>
    )
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
