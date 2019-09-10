import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = [
    { title: 'Smells like spirit' },
    { title: 'Enter Sandman' }
];

const reducer = (state = initialState, action) => { // this is reducer function
    console.log('action', action);
    if (action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.payload
        ];
    }

    return [...state];
};

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // window.__REDUX_DEVTOOLS_EXTENSION__ for REDUX devtool extension for Chrome

ReactDOM.render(
    <Provider store = { store }>
        <App />
    </Provider>,
    document.getElementById('app'),
);
