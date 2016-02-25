import {
    INCREMENT_COUNTER, DECREMENT_COUNTER,
    FETCH, FETCH_SUCCESS, FETCH_FAILURE
    } from 'constants/counter';

export function increment() {
    return {
        type: INCREMENT_COUNTER
    };
}

export function decrement() {
    return {
        type: DECREMENT_COUNTER
    };
}

export function incrementIfOdd() {
    return (dispatch, getState) => {
        const { counter } = getState();

        if (counter % 2 === 0) {
            return;
        }

        dispatch(increment());
    };
}

export function incrementAsync() {
    return dispatch => {
        setTimeout(() => {
            dispatch(increment());
        }, 1000);
    };
}

export function decrementAsync() {
    return {
        type: [ FETCH, FETCH_SUCCESS, FETCH_FAILURE ],
        payload(dispatch, getState) {
            return new Promise((resolve, reject) => {
                const { counter } = getState();

                if (counter % 2 == 1) {
                    setTimeout(() => resolve('eba'), 2000);
                } else {
                    reject('Sorry, man :(');
                }
            });
        }
    };
}
