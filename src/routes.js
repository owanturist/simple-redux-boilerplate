import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { App, ErrorPage } from 'containers';
import { syncHistoryWithStore } from 'react-router-redux';

function Routes(props) {
    const history = syncHistoryWithStore(browserHistory, props.store);

    return (
        <Router history={history}>
            <Route path="/" component={App}>
                <Route path="*" component={ErrorPage} />
            </Route>
        </Router>
    );
}

Routes.propTypes = {
    store: PropTypes.object.isRequired
};

export default Routes;
