import {useRoute, useRouter} from 'vue-router';

export function useUpdateRouter() {
    const router = useRouter();
    const route = useRoute();

    return (key, value) => {
        const oldQuery = route.query;
        let query = {};

        for (const k in oldQuery) {
            if (oldQuery[k] && key !== k && value !== oldQuery[k]) {
                query[k] = oldQuery[k];
            }
        }

        if (value) {
            query[key] = value;
        }

        return router.replace({query});
    };
}
