import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as counterActions from 'actions/counter';
import { Counter, Footer } from 'components';


function select(state) {
    return {
        counter: state.counter
    };
}

const bind = {
    ...counterActions
};

@connect(select, bind)
class App extends Component {

    static propTypes = {
        counter: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired,
        incrementIfOdd: PropTypes.func.isRequired,
        incrementAsync: PropTypes.func.isRequired
    };

    inclrementHandler() {
        this.props.increment();
    }

    declrementHandler() {
        this.props.decrement();
    }

    render() {
        const { counter } = this.props;

        return (
            <div>
                <h1>Simple Redux Boilerplate</h1>
                <Counter
                    counter={counter}
                    onIncrement={::this.inclrementHandler}
                    onDecrement={::this.declrementHandler}
                />
                <Footer />
            </div>
        );
    }
}

export default App;
