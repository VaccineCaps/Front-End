import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/views/HomeView.vue";
import AdminLogin from "@/views/admin-login.vue";
import verification from "@/views/verification.vue";
import sessions from "@/views/vaksinasiSession.vue";
import addSessions from "@/views/createVaksinasiSession.vue";
import preview from "@/views/previewSesiVaksin.vue";

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
        path: "/verification",
        name: "verification",
        component: verification,
    },
    {
        path: "/sessions",
        name: "sessions",
        component: sessions,        
    },
    {
        path: "/addsessions",
        name: "addsessions",
        component: addSessions,
    },
    {
        path: "/preview",
        name: "preview",
        component: preview,
    },
];

const router = new VueRouter({
    mode: "history",
    base: "/",
    routes,
});

export default router;