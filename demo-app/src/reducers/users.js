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