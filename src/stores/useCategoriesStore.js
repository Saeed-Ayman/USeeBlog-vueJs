import {defineStore} from "pinia";
import ApiCategory from "@/services/APIS/Category.js";
import {onMounted, ref, watch} from "vue";
import {useRoute} from "vue-router";
import {useErrorStore} from "@/stores/useErrorStore.js";

export const useCategoriesStore = defineStore('categories', () => {
    const route = useRoute();

    const active = ref(null);
    const all = ref(null);
    const doneInit = ref(false);

    onMounted(init);
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

        if (!active.value)
            useErrorStore().set("Error: Category can not found!");
    }

    return {all, active, init, doneInit};
});
