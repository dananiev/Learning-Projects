import React from 'react'
import Contacts from './Contacts';
import Chat from './Chat';
import SplitPane from './App';

function SplitScreen() {
    return (
        <SplitPane 
            left={
                <Contacts />
            } 
            right={
                <Chat />
            } 
        />
    );
}
export default SplitScreen;