export function usersAreLoading(bool) {
    return {
        type: 'USERS_ARE_LOADING',
        isLoading: bool,
    };
}

export function usersFetchDataSuccess(users) {
    return {
        type: 'USERS_SUCCESSFULLY_LOADED',
        users,
    };
}

export function usersFetchData() {
    return (dispatch) => {
        dispatch(usersAreLoading(true));
        if (!localStorage.getItem('users')) {
            const defaultUsersStore = [];
            localStorage.setItem('users', JSON.stringify(defaultUsersStore));
        }
        dispatch(usersAreLoading(false));
        dispatch(usersFetchDataSuccess(JSON.parse(localStorage.getItem('users'))));
    }
}
export function addUserSuccess(user) {
    return {
        type: 'ADD_NEW_USER_SUCCESS',
        user,
    }
}

export function addNewUser(name, surname, email, phone) {
    return dispatch => {
        const user = {
            name: name,
            surname: surname,
            email: email,
            phone: phone
        };
        const usersStorage = JSON.parse(localStorage.getItem('users'));
        usersStorage.push(user);
        localStorage.setItem('users', JSON.stringify(usersStorage));
        dispatch(addUserSuccess(user));
    }
}

export function deleteUserSuccess(name) {
    return {
        type: 'DELETE_USER_SUCCESS',
        name,
    }
}

export function deleteUser(userName) {
    return dispatch => {
        let deleteFromStorage = JSON.parse(localStorage.getItem('users')).filter(el => {
            return el.name !== userName;
        })
        localStorage.setItem('users', JSON.stringify(deleteFromStorage));
        dispatch(deleteUserSuccess(userName));
    }
}