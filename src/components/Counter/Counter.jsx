import React from 'react';
import cssModules from 'react-css-modules';
import styles from './counter.css';

function Counter({ counter, onIncrement, onDecrement }) {
    return (
        <div styleName="root_test">
            <div>{counter}</div>
            <div>
                {counter % 2 === 0 ? 'even' : 'odd'}
            </div>
            <br />
            <div>
                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
            </div>
        </div>
    );
}

export default cssModules(Counter, styles);
