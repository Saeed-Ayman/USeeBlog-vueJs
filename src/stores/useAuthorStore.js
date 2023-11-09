import {defineStore} from "pinia";
import {ref, watch} from "vue";
import {useRoute} from "vue-router";
import ApiAuthor from "@/services/APIS/User.js";

export const useAuthorStore = defineStore('author', () => {
    const active = ref(null);
    const doneInit = ref(false);
    const route = useRoute();

    watch(() => route.query.author, init);

    async function init() {
        doneInit.value = false;
        if (route.query.author) {
            active.value = await ApiAuthor.show({username: route.query.author});
        } else {
            active.value = null;
        }
        doneInit.value = true;
    }

    return {active, init, doneInit};
});
