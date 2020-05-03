import React from 'react'
import SplitPane from './SplitPane'
import Chat from './Chat'
import Contacts from './Contacts'
import './App.css'

export default function App() {
    return <SplitPane left={<Contacts />} right={<Chat />} />
}