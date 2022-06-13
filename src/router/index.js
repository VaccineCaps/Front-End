import VueRouter from "vue-router";

import HomePage from "@/views/HomeView.vue";
import layout from "@/layouts/indexLay.vue";

import SyaratPenggunaan from "@/views/syarat-penggunaan.vue";
import KebijakanPrvasi from "@/views/kebijakan-privasi.vue";

import stokVaksin from "@/views/Stok/stok-vaksin";
import laporanBaru from "../views/Stok/laporan-baru";
import VaksinKeluar from "../views/Stok/vaksin-keluar";
import VaksinMasuk from "../views/Stok/vaksin-masuk";

import Vue from "vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/admin",
    name: "AdminLogin",
    component: layout,
    children: [
      {
        path: "",
        name: "",
        component: () => import("../views/admin-login.vue"),
      },
      {
        path: "kebijakan-privasi",
        name: "KebijakanPrivasi",
        component: KebijakanPrvasi,
      },
      {
        path: "syarat-penggunaan",
        name: "SyaratPenggunaan",
        component: SyaratPenggunaan,
      },
      {
        path: "profile-menu",
        name: "MenuProfile",
        component: () => import("@/views/profile-menu"),
      },
      {
        path: "stok-vaksin",
        name: "StokVaksin",
        component: layout,
        children: [
          {
            path: "",
            name: "",
            component: stokVaksin,
          },
          {
            path: "laporan-baru",
            component: layout,
            children: [
              {
                path: "",
                name: "",
                component: laporanBaru,
              },
              {
                path: "registrasi-vaksin-keluar",
                component: VaksinKeluar,
              },
              {
                path: "registrasi-vaksin-masuk",
                component: VaksinMasuk,
              },
            ],
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});

export default router;
