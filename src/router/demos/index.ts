import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/demo",
        name: "demo-index",
        component: () => import("../../components/cssDemos.vue"),
    },
];

export default routes;
