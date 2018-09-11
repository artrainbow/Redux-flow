import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = [
    'Smells like spirit',
    'Enter Sandman'
];

const playlist = (state = initialState, action) => { // this is reducer function

    if (action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.payload
        ];
    }

    return state;
};

const store = createStore(playlist);

ReactDOM.render(
    <Provider store = { store }>
        <App />
    </Provider>,
    document.getElementById('app'),
);
