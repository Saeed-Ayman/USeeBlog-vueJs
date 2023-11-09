import {defineStore} from "pinia";
import ApiCategory from "@/services/APIS/Category.js";
import {ref, watch} from "vue";
import {useRoute} from "vue-router";

export const useCategoriesStore = defineStore('categories', () => {
    const route = useRoute();

    const active = ref(null);
    const all = ref(null);
    const doneInit = ref(false);

    watch(() => route.query.category, updateActiveCategory);

    async function init() {
        doneInit.value = false;
        all.value = await ApiCategory.index();
        updateActiveCategory();
        doneInit.value = true;
    }

    function updateActiveCategory() {
        active.value = route.query.category ?
            all.value.find(c => c.slug === route.query.category) : all.value.at(0);
    }

    return {all, active, init, doneInit};
});
