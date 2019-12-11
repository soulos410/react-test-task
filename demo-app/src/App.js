import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import UsersList from './components/usersList/UsersList';

function App() {
  return (
    <Router>
      <ul className='app__users-list'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/usersList">Users list</Link>
        </li>
        <li>
          <Link to="/addUser">Add user</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/usersList">
          <UsersList />
        </Route>
        {/* <Route path="/">
          <Home />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
