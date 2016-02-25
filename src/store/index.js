import { createStore, applyMiddleware, compose } from 'redux';
import reducer from 'reducers';
import { DevTools } from 'containers';
import { logger, thunk, promiseProcess } from 'middlewares';

const middlewares = [ thunk, promiseProcess ];

if (__DEVELOPMENT__) {
    middlewares.push(logger());
}

const composed = [
    applyMiddleware(...middlewares)
];

if (__DEVELOPMENT__) {
    composed.push(DevTools.instrument());
}

const finalCreateStore = compose(...composed)(createStore);

function configureStore(initialState) {
    const store = finalCreateStore(reducer, initialState);

    if (__DEVELOPMENT__ && module.hot) {
        module.hot.accept('../reducers', () => store.replaceReducer(require('../reducers')));
    }

    return store;
}

export default configureStore;
