import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import ListCart from './components/ItemListContainer/ItemListContainer';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"> 
          
          </Route>
          <Route path="/cart">
          <ListCart />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

