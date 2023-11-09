import {ref} from "vue";

export function useRegenerationTimeout(delay = 500) {
    const dict = {};

    return function (key, func) {
        if (dict[key])
            clearTimeout(dict[key]);

        dict[key] = setTimeout(async () => {
            await func();
            delete dict[key];
        }, delay);
    }
}
