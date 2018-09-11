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

// store.subscribe(() => {
//     console.log('subscribe', store.getState());
//     const ul = document.getElementsByClassName('list')[0];
//     ul.innerHTML = '';
//     document.querySelectorAll('.trackInput')[0].value = '';
//     store.getState().forEach(track => {
//         const li = document.createElement('li');
//         li.innerHTML = track;
//         ul.appendChild(li);
//     })
// });
//
//
// export default class App extends Component {
//
//     componentDidMount() {
//         const addTrackBtn = document.querySelectorAll('.addTrack')[0];
//         console.log(addTrackBtn);
//         addTrackBtn.addEventListener('click', () => {
//             const trackName = document.querySelectorAll('.trackInput')[0].value;
//             store.dispatch({type: 'ADD_TRACK', payload: trackName});
//         })
//     }
//
//     render() {
//         return (
//             <>
//                 <input type="text" className="trackInput"/>
//                 <button className="addTrack">Add track</button>
//                 <ul className="list"></ul>
//             </>
//         )
//     }
// }
//
//
// ReactDOM.render(<App/>, document.getElementById('app'));
