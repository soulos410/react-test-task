import React from 'react';
import './UsersList.css';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    users: state.users,
});

class UsersList extends React.Component {
    render() {
        const usersList = this.props.users.map((el, ind) =>
            <tr key={ind} className='users__single-item'>
                <td className='users-list__single-cell'>{el.name}</td>
                <td className='users-list__single-cell'>{el.surname}</td>
                <td className='users-list__single-cell'>{el.age}</td>
            </tr>
        );

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
                                Age
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {usersList}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default connect(mapStateToProps)(UsersList);
