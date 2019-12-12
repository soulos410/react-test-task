import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addNewUser } from '../../actions/index';
import './AddUserForm.css';

const mapDispatchToProps = dispatch => ({
  addUser: (name, surname, email, phone) => dispatch(addNewUser(name, surname, email, phone))
});

class AddUserForm extends Component {
  state = {
    name: '',
    surname: '',
    email: '',
    phone: ''
  }

  redirectToUserList = () => {
    this.props.history.push('/usersList');
  }

  addUserHandler = (event) => {
    event.preventDefault();
    try {
      this.props.addUser(this.state.name, this.state.surname, this.state.email, this.state.phone);
      this.redirectToUserList();
    }
    catch (e) {
      throw new Error(e.message);
    }
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value
    })
  }

  render() {
    return (
      <form className='add-user__form' onSubmit={this.addUserHandler}>
        <input type='text' name='name' value={this.state.name} placeholder='Enter user name' onChange={this.handleChange} required />
        <input type='text' name='surname' value={this.state.surname} placeholder='Enter user surname' onChange={this.handleChange} required />
        <input type='email' name='email' value={this.state.email} placeholder='Enter user email' onChange={this.handleChange} required />
        <input type='tel' name='phone' value={this.state.phone} pattern='375(?:29|44|25)[0-9]{7}' onChange={this.handleChange} placeholder='Enter phone number' required />
        <button type='submit'>Save</button>
        <Link to='/usersList'>Cancel</Link>
      </form>
    )
  }
}

export default withRouter(connect(null, mapDispatchToProps)(AddUserForm));
