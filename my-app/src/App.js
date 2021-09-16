import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './components/Home';
import Opportunities from './components/Opportunities';
import Navbar from './components/Navbar/Navbar'

const API = "http://localhost:9292"

function App() {
  const [opportunities, setOpportunities] = useState([]);
  const [volunteers, setVolunteers] = useState([]);
  
  useEffect(() => 
    fetch(`${API}/opportunities`)
    
    .then(res => res.json())
    // .then(data => console.log(data)))
    .then(data => setOpportunities(data))
    .catch((err) => console.error(err)),
    [])

  // useEffect(() => 
  //   fetch(`${API}/volunteers`)
  //   .then(res => res.json())
  //   .then(data => setVolunteers(data))
  //   .catch((err) => console.error(err)),
  //   [])


  function handleAddOpportunity(newOpportunity) {
    fetch(`${API}/opportunities`, { 
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-type": "application/json"
      },
      body: JSON.stringify(newOpportunity), 
    })
    .then(res => res.json())
    .then(json => setOpportunities([...opportunities, newOpportunity]))
  }

  function handleDelete(id) {
    fetch(`${API}/opportunity/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "*/*",
        "Content-type": "application/json"
      },
    })
    .then(() => setOpportunities(
      opportunities.filter((opportunity) => opportunity.id !== id)))
    // .then(res => console.log(res))
  }

  function handleAddVolunteer(newVolunteer) {
    fetch(`${API}/volunteers`, {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-type": "application/json"
      },
      body: JSON.stringify(newVolunteer),
    })
    .then(res => res.json())
    .then(json => setVolunteers([...volunteers, newVolunteer]))
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/volunteer">
          <Opportunities 
          opportunities={opportunities}
          addOpportunity={handleAddOpportunity}
          addVolunteer={handleAddVolunteer}
          onDelete={handleDelete}
          />
        </Route>
        <Route exact path="/" >
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
