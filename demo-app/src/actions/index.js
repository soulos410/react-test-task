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
