import React from 'react';
import { Provider } from 'react-redux';
import { App, DevTools } from 'containers';

function Root({ store }) {
    return (
        <Provider store={store}>
            {__DEVELOPMENT__ ? (
                <div>
                    <App/>
                    <DevTools />
                </div>
            ) : (
                <App />
            )}
        </Provider>
    );
}

export default Root;
