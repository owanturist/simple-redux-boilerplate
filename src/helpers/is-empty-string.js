export default function isEmptyString(str = '') {
    return (str !== null && str.toString().trim().length == 0);
}
