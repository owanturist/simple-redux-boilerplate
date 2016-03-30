import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { DevTools } from 'containers';
import Routes from 'routes';

function Root(props) {
    const { store } = props;

    return (
        <Provider store={store}>
            {__DEVELOPMENT__ ? (
                <div>
                    <Routes store={store} />
                    <DevTools />
                </div>
            ) : (
                <Routes store={store} />
            )}
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;
