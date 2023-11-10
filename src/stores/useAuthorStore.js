import {defineStore} from "pinia";
import {onMounted, ref, watch} from "vue";
import {useRoute} from "vue-router";
import ApiAuthor from "@/services/APIS/User.js";
import {useErrorStore} from "@/stores/useErrorStore.js";

export const useAuthorStore = defineStore('author', () => {
    const active = ref(null);
    const doneInit = ref(false);
    const route = useRoute();

    onMounted(init);
    watch(() => route.query.author, init);

    async function init() {
        doneInit.value = false;
        if (!route.query.author) {
            active.value = null;
            doneInit.value = true;
            return;
        }

        try {
            active.value = await ApiAuthor.show({username: route.query.author});
        } catch (e) {
            useErrorStore().set(e);
        }

        doneInit.value = true;
    }

    return {active, init, doneInit};
});
