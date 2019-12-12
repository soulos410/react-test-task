import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// import { rootReducer } from '../reducers/index';

export function userReducer(state = {}, action) {
    switch (action.type) {
        case 'USERS_ARE_LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            }
        case 'USERS_SUCCESSFULLY_LOADED':
            return {
                ...state,
                users: action.users
            }
        case 'ADD_NEW_USER_SUCCESS':
            console.log('reducer addUsers', {
                ...state,
                users: [
                    ...state.users,
                    action.user
                ]
            });
            return {
                ...state,
                users: [
                    ...state.users,
                    action.user
                ]
            }
        case 'DELETE_USER_SUCCESS':
            return state.users.filter(el => {
                return el.name !== action.name
            });
        default:
            return state;
    }
}
const initialState = {
    isLoading: false,
    users: [],
};

export default function storeConfiguration() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(combineReducers({ userReducer }), initialState, composeEnhancers(applyMiddleware(thunk)));
}
