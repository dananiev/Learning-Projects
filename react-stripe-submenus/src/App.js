import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Submenu from './components/Submenu';

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </div>
  );
}

export default App;
