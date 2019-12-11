import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { connect } from 'react-redux';
import './App.css';
import { usersFetchData } from './actions/index';
import UsersList from './components/UsersList/UsersList';
import AddUserForm from './components/AddUserForm/AddUserForm';

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(usersFetchData()),
});

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
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
          <Route path="/addUser">
            <AddUserForm />
          </Route>
        </Switch>
      </Router >
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
