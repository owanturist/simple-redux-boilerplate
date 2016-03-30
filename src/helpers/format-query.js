import { isEmptyString } from './';
import { objectReduce } from './utils';
import _isEmpty from 'lodash.isempty';

const PERMITTED_TYPES = /^(string|number|object)$/;

function stringHandler(str) {
    return str.trim();
}

function objectHandler(obj) {
    return objectReduce(obj, (acc, val, key) => {
        if (!val || !PERMITTED_TYPES.test(typeof val)) {
            return acc;
        }

        return [...acc, `${key}=${val}`];
    }, []).join('&');
}

function handleByType(value) {
    switch (typeof value) {
    case 'string':
        return stringHandler(value);
    case 'object':
        return objectHandler(value);
    default:
        return '';
    }
}

export default function formatQuery(query) {
    if (_isEmpty(query)) {
        return '';
    }

    const result = handleByType(query);

    return isEmptyString(result) ? result : `?${result}`;
}
