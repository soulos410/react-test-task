import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import storeConfiguration from './store/storeConfiguration';

const store = storeConfiguration();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider >
    , document.getElementById('root')
);
