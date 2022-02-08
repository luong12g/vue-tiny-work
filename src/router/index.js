/*
 * @Descripttion:
 * @version: 1.1
 * @Author: Ko Kanei
 * @Date: 2020-12-28 15:09:04
 * @LastEditors: Ko Kanei
 * @LastEditTime: 2020-12-28 16:06:31
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
