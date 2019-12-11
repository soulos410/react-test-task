import React, { Component } from 'react';
import './AddUserForm.css'

export default class AddUserForm extends Component {
  render() {
    return (
      <form className='add-user__form'>
        <input placeholder='Enter user name' required />
        <input placeholder='Enter user surname' required />
        <input placeholder='Enter user age' required />
        <button type='submit'>Add user</button>
      </form>
    )
  }
}

