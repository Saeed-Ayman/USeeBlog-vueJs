export default class {
    static objectToString(args, initialValue = '') {
        return Object.keys(args).reduce((carry, key) => `${carry}&${key}=${args[key]}`, initialValue) ?? initialValue;
    }

    static with(cols) {
        return cols.reduce((carry, value) => `${carry}_expand=${value}&`, '');
    }
}
