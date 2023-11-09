import {defineStore} from "pinia";
import ApiPost from "@/services/APIS/Post.js";
import {ref, watch} from "vue";
import {useCategoriesStore} from "@/stores/useCategoriesStore.js";
import {useAuthorStore} from "@/stores/useAuthorStore.js";
import {useRegenerationTimeout} from "@/composables/useRegenerationTimeout.js";

export const usePostsStore = defineStore('posts', () => {
    const doneInit = ref(false);
    const categories = useCategoriesStore();
    const author = useAuthorStore();
    const all = ref(null);
    const regenerationTimeout = useRegenerationTimeout(500);

    watch([
            () => author.active,
            () => categories.active
        ],
        init
    );

    async function init() {
        doneInit.value = false;
        regenerationTimeout('post.init', updatePosts);
    }

    async function updatePosts() {
        const args = {};

        if (author.active)
            args.userId = author.active.id;

        if (categories.active && categories.active.slug !== 'all')
            args.categoryId = categories.active.id;

        all.value = await ApiPost.index(args);
        doneInit.value = true;
    }

    return {all, init, doneInit}
});
