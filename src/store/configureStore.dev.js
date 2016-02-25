import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
import { logger, thunk, promiseProcess } from 'middlewares';

const finalCreateStore = compose(
    applyMiddleware(logger(), thunk, promiseProcess),
    DevTools.instrument()
)(createStore);

module.exports = function configureStore(initialState) {
    const store = finalCreateStore(rootReducer, initialState);

    if (module.hot) {
        module.hot.accept('../reducers', () => store.replaceReducer(require('../reducers')));
    }

    return store;
};
