function promiseProcess({ dispatch, getState }) {
    return next => action => {
        const { type, payload, ...meta } = action;

        if (!Array.isArray(type)) {
            return next(action);
        }

        const [ REQUEST, SUCCESS, FAILURE ] = type;

        dispatch({ ...meta, type: REQUEST });

        return payload(dispatch, getState)
            .then(result => dispatch({ ...meta, type: SUCCESS, payload: result }))
            .catch(error => dispatch({ ...meta, type: FAILURE, payload: error, error: true }));
    };
}

export default promiseProcess;
