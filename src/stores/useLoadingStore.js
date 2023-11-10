import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const useLoadingStore = defineStore('loading', () => {
    const loadings = ref([]);

    const loading = computed(() => !!loadings.value.length);
    const start = (id) => loadings.value.push(id);
    const end = (id) => loadings.value = loadings.value.filter(i => i !== id);

    return {loading, start, end};
})
