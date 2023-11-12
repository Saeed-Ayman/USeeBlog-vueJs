import Layout from "@/views/partials/layout.vue";
import GuestLayout from "@/views/partials/guest-layout.vue";
import Posts from "@/views/posts/index.vue";
import Post from "@/views/posts/show.vue";
import Login from "@/views/auth/login.vue";
import Register from "@/views/auth/register.vue";
import Settings from "@/views/settings.vue";
import Error404 from "@/views/partials/error404.vue";

export default [
    {
        path: "/",
        name: "home",
        component: Layout,
        redirect: "/posts",
        children: [
            {
                path: "/posts",
                name: "posts",
                component: Posts
            },
            {
                path: "/posts/:slug",
                name: "post",
                component: Post,
            },
            {
                path: "/profile/settings",
                name: "profile.settings",
                component: Settings,
                meta: {middleware: "auth"}
            },
            {
                path: "/:catchAll(.*)",
                name: "error",
                component: Error404,
            }
        ],
    },
    {
        path: "/",
        component: GuestLayout,
        children: [
            {
                path: "/login",
                name: "login",
                component: Login,
                meta: {middleware: "guest"}
            },
            {
                path: "/register",
                name: "register",
                component: Register,
                meta: {middleware: "guest"}
            }
        ]
    }
];
