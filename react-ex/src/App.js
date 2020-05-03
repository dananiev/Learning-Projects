import React from 'react'
import Contacts from './Contacts'
import Chat from './Chat'
import SplitPane from './SplitPane'

function App() {
    return (
        <SplitPane left={<Contacts />} right={<Chat />} />
    );
}

export default App