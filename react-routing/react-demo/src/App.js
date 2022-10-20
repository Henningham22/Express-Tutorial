import react from 'react';
import {Switch, Route, BrowserRouter as Router, Link} from 'react-scripts-dom'
import './App.css';
import Home from './home';
import Users from './users';
import Contact from './contact';
import Notfound from './notfound';

function App() {
  return (
    <router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Users">Users</Link>
          </li>
          <li>
          <Link to="/Contact">Contact</Link>
          </li>
      </ul>
      <switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/users/:id">
          <Users/>
        </Route>
        <Route path= "/users">
          <Users/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
      </switch>
      </div>
    </router>
  );
};

export default App;