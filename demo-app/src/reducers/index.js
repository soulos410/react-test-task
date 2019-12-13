import { combineReducers } from 'redux';
import {
    users, usersAreLoading
} from './users';

export const rootReducer = combineReducers({
    users, usersAreLoading
});