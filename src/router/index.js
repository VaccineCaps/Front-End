import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/views/HomeView.vue";
<<<<<<< HEAD
import AdminLogin from "@/views/admin-login.vue";
import verification from "@/views/verification.vue";
import sessions from "@/views/vaksinasiSession.vue";
import addSessions from "@/views/createVaksinasiSession.vue";
import preview from "@/views/previewSesiVaksin.vue";
=======
import layout from "@/layouts/indexLay.vue";

import SyaratPenggunaan from "@/views/syarat-penggunaan.vue";
import KebijakanPrvasi from "@/views/kebijakan-privasi.vue";

import stokVaksin from "@/views/Stok/stok-vaksin";
import laporanBaru from "../views/Stok/laporan-baru";
import VaksinKeluar from "../views/Stok/vaksin-keluar";
import VaksinMasuk from "../views/Stok/vaksin-masuk";

import Vue from "vue";
>>>>>>> dzikri

Vue.use(VueRouter);

const routes = [
<<<<<<< HEAD
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
=======
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
>>>>>>> dzikri
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});

export default router;
