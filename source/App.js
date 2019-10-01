// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { getTracks } from './actions/tracks';

@hot(module)
class App extends Component {
    render () {
        const {
            store,
            onAddTrack,
            onRemoveTrack,
            onFindTrack,
            onGetTracks,
            ownProps,
        } = this.props;

        const addTrack = () => {
            onAddTrack(this.trackInput.value);
            this.trackInput.value = '';
        };

        const removeTrack = (id) => {
            console.log(id);
            onRemoveTrack(id);
        };

        const findTrack = () => {
            onFindTrack(this.searchInput.value);
        };

        return (
            <>
                <div>
                    <input
                        ref = { (input) => {
                            this.searchInput = input;
                        } }
                        type = 'text'
                    />
                    <button onClick = { findTrack }>Find track</button>
                </div>
                <div>
                    <input
                        ref = { (input) => {
                            this.trackInput = input;
                        } }
                        type = 'text'
                    />
                    <button onClick = { addTrack }>Add track</button>
                </div>
                <div>
                    <button onClick = { onGetTracks }>Fetch tracks from remote store</button>
                </div>
                <ul>
                    {store.map((track, index) => (
                        <li key = { index }>
                            <Link to = { `/tracks/${track.id}` }>{track.name}</Link>
                            <span>&nbsp;&nbsp;</span>
                            <button
                                onClick = { () => {
                                    removeTrack(track.id);
                                } }>Remove
                            </button>
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}

export default connect(
    (state, ownProps) => ({
        store: state.tracks.filter((track) => track.name.includes(state.filterTracks)),
        ownProps,
    }),
    (dispatch) => ({
        onAddTrack: (name) => {
            const payload = {
                id: Date.now().toString(),
                name,
            };

            dispatch({
                type: 'ADD_TRACK',
                payload,
            });
        },
        onRemoveTrack: (id) => {
            dispatch({
                type: 'REMOVE_TRACK', // type и payload будут переданы в reducer функцию tracks
                payload: id,
            });
        },
        onFindTrack: (name) => {
            dispatch({
                type:    'FIND_TRACK',
                payload: name,
            });
        },
        onGetTracks: () => {
            dispatch(getTracks());
        },
    }),
)(App);
