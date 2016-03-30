import fetchQuest, { formatPath } from 'helpers/request';
import config from 'config';

function request(path, params, body) {
    const url = `http://${config.apiHost}:${config.apiPort}/${config.apiPath}/${formatPath(path)}`;

    return fetchQuest(url, {
        headers: {
            'content-type': 'application/json',
            accept: 'application/json'
        },
        ...params
    }, body);
}

export function getDistrict() {
    return request('gis/districts');
}

export function sendCollection(collection) {
    return request('branch', {
        method: 'post',
    }, {
        config: collection
    });
}
