import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import demoRoute from "./demos";


const baseName = "myDemos";
const routes: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: '/demo'
    },
    ...demoRoute,
    {
        path: "/:pathMatch(.*)*",
        name: "not_found",
        component: () => import("../404.vue"),
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(baseName),
});

export default router;
