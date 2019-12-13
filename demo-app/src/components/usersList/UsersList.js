import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UsersList.css';
import { connect } from 'react-redux';
import { deleteUser } from '../../actions/index';

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  deleteUser: (name) => dispatch(deleteUser(name))
})

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.users
    }
  }
  deleteHandler = (event) => {
    this.props.deleteUser(event.target.name);
  }

  render() {
    return (
      <div>
        <table className='users__list'>
          <thead>
            <tr>
              <td className='users-list__single-cell'>
                Name
              </td>
              <td className='users-list__single-cell'>
                Surname
              </td>
              <td className='users-list__single-cell'>
                Email
              </td>
              <td className='users-list__single-cell'>
                Phone
              </td>
              <td className='users-list__single-cell'>
                <Link to='/addUser' className='users-list__add-user_btn'>Add user</Link>
              </td>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map((el, index) => (
              <tr key={index} className='users__single-item' name='single-user'>
                <td className='users-list__single-cell' name='name'>{el.name}</td>
                <td className='users-list__single-cell' name='surname'>{el.surname}</td>
                <td className='users-list__single-cell' name='email'>{el.email}</td>
                <td className='users-list__single-cell' name='phone'>{el.phone}</td>
                <td className='users-list__single-cell' ><button name={el.name} onClick={this.deleteHandler}>Delete user</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
