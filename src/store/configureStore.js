/**
 * Based on the current environment variable, we need to make sure
 * to exclude any DevTools-related code from the production builds.
 * The code is envify'd - using 'DefinePlugin' in Webpack.
 */

let loadedStore = null;

if (__DEVELOPMENT__) {
    loadedStore = require('./configureStore.dev');
} else {
    loadedStore = require('./configureStore.prod');
}

export const configureStore = loadedStore;
