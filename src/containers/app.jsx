import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

function select(state) {
    return state;
}

const bind = {};

class App extends Component {
    render() {
        return (
            <div>
                <h1>hello world</h1>
                {this.props.children}
            </div>
        );
    }
}

export default App;
