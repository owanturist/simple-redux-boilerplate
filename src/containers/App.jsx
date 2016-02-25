import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from 'actions/CounterActions';
import Counter from 'components/Counter';
import Footer from 'components/Footer';


function select(state) {
    return {
        counter: state.counter
    };
}

function bind(dispatch) {
    return {
        actions: bindActionCreators(CounterActions, dispatch)
    };
}


@connect(select, bind)
class App extends Component {

    static propTypes = {
        counter: PropTypes.number.isRequired,
        actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired
    };

    render() {
        const { counter, actions } = this.props;

        return (
            <div>
                <h1>Simple Redux Boilerplate</h1>
                <Counter counter={counter} actions={actions} />
                <Footer />
            </div>
        );
    }
}

export default App;
