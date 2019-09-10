// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';

@hot(module)
class App extends Component {
    render () {
        const { store, onAddtrack } = this.props;

        console.log('props', store);

        const addTrack = () => {
            console.log('addtrack', this.trackInput.value);
            onAddtrack({ title: this.trackInput.value });
            this.trackInput.value = '';
        };

        return (
            <>
                <input
                    ref = { (input) => {
                        this.trackInput = input;
                    } }
                    type = 'text'
                />
                <button onClick = { addTrack }>Add track</button>
                <ul>
                    {store.tracks.map((track, index) => (<li key = { index }>{track.title}</li>))}
                </ul>
            </>
        );
    }
}

export default connect(
    (state) => ({
        store: state,
    }),
    (dispatch) => ({
        onAddtrack: (trackName) => {
            dispatch({
                type:    'ADD_TRACK',
                payload: trackName,
            });
        },
    }),
)(App);
