import 'isomorphic-fetch';
import { formatQuery } from './';

// remove all matched '/' from the start
export function formatPath(apiPath = '') {
    return apiPath.trim().replace(/^\/*/, '');
}

export function formatParams({ body, ...params } = {}, data = body) {
    return {
        credentials: 'same-origin',
        body: data && JSON.stringify(data),
        ...params
    };
}

export function checkResponse(response) {
    if (response.status < 200 || response.status >= 300) {
        throw response;
    }

    return response.json();
}

export function failureHandler(response) {
    const error = new Error(`Fetch error: ${response.statusText}`);

    error.response = response;
    throw error;
}

export default function request(url, { query, ...params } = {}, data) {
    const queryString = formatQuery(query);

    return fetch(`${url}${queryString}`, formatParams(params, data))
        .then(checkResponse)
        .catch(failureHandler);
}
