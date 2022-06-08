import VueRouter from "vue-router";

import HomePage from "@/views/HomeView.vue";
import DataRegistrasi from "@/views/DataRegister.vue";

import Vue from "vue";

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
];
const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});

export default router;
