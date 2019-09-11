import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './App';
import About from './About';
import Track from './Track';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <Provider store = { store }>
        <Router history = { history }>
            <Route component = { App } exact path = '/' />
            <Route component = { About } path = '/about' />
            <Route component = { Track } path = '/tracks/:id' />
        </Router>
    </Provider>,
    document.getElementById('app'),
);
