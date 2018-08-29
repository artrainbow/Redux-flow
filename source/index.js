import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

const playlist = (state = [], action) => {
    console.log('action', action);

    if (action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.payload,
        ];
    }
}

const store = createStore(playlist);

store.subscribe(() => {
    console.log('subscribe', store.getState());
    const ul = document.getElementsByClassName('list')[0];
    ul.innerHTML = '';
    document.querySelectorAll('.trackInput')[0].value = '';
    store.getState().forEach(track => {
        const li = document.createElement('li');
        li.innerHTML = track;
        ul.appendChild(li);
    })
});


export default class App extends Component {

    componentDidMount() {
        const addTrackBtn = document.querySelectorAll('.addTrack')[0];
        console.log(addTrackBtn);
        addTrackBtn.addEventListener('click', () => {
            const trackName = document.querySelectorAll('.trackInput')[0].value;
            store.dispatch({type: 'ADD_TRACK', payload: trackName});
        })
    }

    render() {
        return (
            <>
                <input type="text" className="trackInput"/>
                <button className="addTrack">Add track</button>
                <ul className="list"></ul>
            </>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('app'));