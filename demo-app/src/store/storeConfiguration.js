import { createStore } from 'redux';
import { rootReducer } from '../reducers';

export default function storeConfiguration(initialState) {
    return createStore(rootReducer, initialState);
}