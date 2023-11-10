import {defineStore} from "pinia";
import {ref, watch} from "vue";
import {useRoute} from "vue-router";

export const useErrorStore = defineStore('error', () => {
    const _msg = ref(null);
    const _status = ref();
    const route = useRoute();

    watch(route, () => {
        _msg.value = null;
        _status.value = null;
    })

    function set(msg, status = 404) {
        _msg.value = msg;
        _status.value = status;
    }

    return {msg: _msg, set, status: _status};
})
