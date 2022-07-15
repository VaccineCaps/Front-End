import VueRouter from "vue-router";

import HomePage from "@/views/HomeView.vue";
import AdminLogin from "@/views/admin-login.vue";
import MainmenuAdmin from "@/views/Mainmenu-admin.vue";
import MenuBannerIklan from "@/views/MenuBannerIklan.vue";
import MenuBeritaArtikel from "@/views/MenuBeritaArtikel.vue";
import CrudMediaArtikel from "@/views/CrudMediaArtikel.vue";


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
        component: AdminLogin 
    },
    {
        path: "/mainmenu-admin",
        name: "/MainmenuAdmin",
        component :  MainmenuAdmin
    },
    {
        path: "/menubanner-iklan",
        name: "/MenuBannerIklan",
        component :  MenuBannerIklan
    },
    {
        path: "/menuberita-artikel",
        name: "/MenuBeritaArtikel",
        component :  MenuBeritaArtikel
    },
    {
        path: "/crud-mediaartikel",
        name: "/CrudMediaArtikel",
        component :  CrudMediaArtikel
    },

];

const router = new VueRouter({
    mode: "history",
    base: "/",
    routes,
});

export default router;