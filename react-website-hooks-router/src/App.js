import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/pages/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' />
        {/*<Route path='/services' component={Services} />
        <Route path='/products' component={Products} />*/}
      </Switch>
    </Router>
  );
}

export default App;
