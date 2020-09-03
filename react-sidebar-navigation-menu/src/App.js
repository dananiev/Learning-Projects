import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './pages/Products';
import Home from './pages/Home';
import Reports from './pages/Reports';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/reports' component={Reports} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
