import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/views/HomeView.vue";
import DataRegistrasi from "@/views/DataRegistrasi.vue";
import MediaBerita from "@/views/MediaBerita.vue";
//  terserah


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/DataRegister",
    name: "DataRegistrasi",
    component: DataRegistrasi,
  },
  {
    path: "/MediaBerita",
    name: "MediaBerita",
    component: MediaBerita,
  },
    {
        path: "/",
        name: "HomePage",
        component: HomePage
    },
    {
        path: "/DataRegistrasi",
        name: "DataRegistrasi",
        component: DataRegistrasi
    }
];
const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});

export default router;
