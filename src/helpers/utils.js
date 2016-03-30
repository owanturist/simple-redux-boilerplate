export function objectReduce(obj, f, a) {
    return Object.keys(obj).reduce((acc, key, i) => {
        return f(acc, obj[key], key, i);
    }, a);
}

export function objectMap(obj, f) {
    return objectReduce(obj, (acc, val, key, i) => ({
        ...acc,
        [key]: f(val, key, i)
    }), {});
}

export function drop(arr, i, l = 1) {
    return [
        ...arr.slice(0, i),
        ...arr.slice(i + l)
    ];
}

export function insert(arr, i, el) {
    const before = arr.slice(0, i);
    const after = arr.slice(i + 1);

    return Array.isArray(el) ? [ ...before, ...el, ...after ] : [ ...before, el, ...after ];
}
