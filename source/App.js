// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';

//@hot(module)
class App extends Component {
    render () {
        const { testStore } = this.props;

        const addTrack = () => {
            console.log('addtrack', this.trackInput.value);
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
                    {testStore.map((track, index) => (
                        <li key = { index }>{track}</li>
                    ),
                    )}
                </ul>
            </>
        );
    }
}

export default connect(
    (state) => ({
        testStore: state,
    }),
    (dispatch) => ({}),
)(App);
