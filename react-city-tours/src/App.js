import React from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import TourList from './components/tourlist/TourList';
import Home from './components/home/Home';
import About from './components/about/About';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/tours' component={TourList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
