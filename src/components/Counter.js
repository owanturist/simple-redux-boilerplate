import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './counter.css';

@cssModules(styles)
class Counter extends Component {

    static propTypes = {
        counter: PropTypes.number.isRequired,
        actions: PropTypes.object.isRequired
    };

    state = {};

    handleIncrement() {
        this.props.actions.increment();
    }

    handleDecrement() {
        this.props.actions.decrement();
    }

    render() {
        return (
            <div styleName="root_test">
                <div className="counter-num-label">{this.props.counter}</div>
                {/* Below, the even or odd statement is simply used to demonstrate how one could
                    easily use a ternary operator to conditionally show an 'even' or 'odd' string
                    based on the counter's value on state. */}
                <div className="counter-even-label">
                    {this.props.counter % 2 === 0 ? 'even' : 'odd'}
                </div>
                <br />
                <div className="counter-buttons">
                    <button onClick={() => {this.handleDecrement();}}>-</button>
                    <button onClick={() => {this.handleIncrement();}}>+</button>
                </div>
            </div>
        );
    }
}

export default Counter;
