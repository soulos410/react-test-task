export function usersAreLoading(state = false, action) {
    switch (action.type) {
        case 'USERS_ARE_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}

export function users(state = [], action) {
    switch (action.type) {
        case 'USERS_SUCCESSFULLY_LOADED':
            return action.users;
        default:
            return state;
    }
}

export function addUser(state = {}, action) {
    switch (action.type) {
        case 'ADD_NEW_USER_SUCCESS':
            return {
                ...state,
                users: [
                    ...state.users,
                    action.user
                ]
            }
        default:
            return state;
    }
}

export function deleteUser(state = [], action) {
    switch (action.type) {
        case 'DELETE_USER_SUCCESS':
            return state.users.filter(el => {
                return el.name !== action.name
            });
        default:
            return state;
    }
}
