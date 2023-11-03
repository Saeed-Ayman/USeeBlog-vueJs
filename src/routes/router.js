import Layout from '@/views/partials/layout.vue';
import Posts from '@/views/posts/index.vue';
import Post from '@/views/posts/show.vue';

export default [
    {
        path: "/",
        name: "home",
        component: Layout,
        children: [
            {
                path: "",
                name: "posts",
                component: Posts
            },
            {
                path: "/:slug",
                name: "post",
                component: Post,
            }
        ]
    },
];
