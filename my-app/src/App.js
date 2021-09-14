import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './components/Home';
import Opportunities from './components/Opportunities';
import Navbar from './components/Navbar/Navbar'

// const API = 

function App() {
  // const [opportunity, setOpportunity] = useState([]);

  // useEffect(() => {
  //   fetch(API)
  //   .then(res => res.json())
  //   .then(data => setOpportunity(data))
  // }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/volunteer">
          <Opportunities />
        </Route>
        <Route exact path="/" >
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
