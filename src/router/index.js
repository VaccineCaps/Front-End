import VueRouter from "vue-router";

import HomePage from "@/views/HomeView.vue";
import AdminLogin from "@/views/admin-login.vue";
import SyaratPenggunaan from "@/views/syarat-penggunaan.vue";
import KebijakanPrvasi from "@/views/kebijakan-privasi.vue"

import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage
    },
    {
        path: "/admin-login",
        name: "AdminLogin",
        component: AdminLogin,   
    },
    {
        path: '/syarat-penggunaan',
        name: 'SyaratPenggunaan',
        component: SyaratPenggunaan
    },
    {
        path: '/kebijakan-privasi',
        name: 'KebijakanPrivasi',
        component: KebijakanPrvasi
    }
];

const router = new VueRouter({
    mode: "history",
    base: "/",
    routes,
});

export default router;