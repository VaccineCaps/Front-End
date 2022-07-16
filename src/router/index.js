import Vue from "vue";
import VueRouter from "vue-router";

import sessions from "@/views/PembuatanVaksin/vaksinasiSession.vue";
import addSessions from "@/views/PembuatanVaksin/createVaksinasiSession.vue";

import layout from "@/layouts/indexLay.vue";
import layout2 from "@/layouts/indexLay2.vue";

import SyaratPenggunaan from "@/views/syarat-penggunaan.vue";
import KebijakanPrvasi from "@/views/kebijakan-privasi.vue";

import stokVaksin from "@/views/Stok/stok-vaksin";
import laporanBaru from "../views/Stok/laporan-baru";
import VaksinKeluar from "../views/Stok/vaksin-keluar";
import VaksinMasuk from "../views/Stok/vaksin-masuk";

import MenuBannerIklan from "@/views/Media/MenuBannerIklan.vue";

import MediaArtikel from "@/views/Media/CrudMediaArtikel.vue";
import MediaIsiArtikel from "@/views/Media/MenuBeritaArtikel.vue";
import DataRegis from "@/views/DataPendaftaran/DataRegistrasi.vue";
import Profile from "@/views/profile-menu.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "Dashboard",
    component: layout,
    children: [
      {
        path: "/",
        name: "home",
        component: DataRegis,
      },
      {
        path: "stok-vaksin",
        name: "StokVaksin",
        component: stokVaksin,
      },
      {
        path: "laporan-baru",
        component: laporanBaru,
      },
      {
        name: "",
        path: "registrasi-vaksin-keluar",
        component: VaksinKeluar,
      },
      {
        path: "registrasi-vaksin-masuk",
        component: VaksinMasuk,
      },
      {
        path: "sessions",
        name: "sessions",
        component: sessions,
      },
      {
        path: "addsessions",
        name: "addsessions",
        component: addSessions,
      },
      {
        path: "media-dan-artikel",
        name: "/media-dan-artikel",
        component: MediaArtikel,
      },
      {
        path: "menu-banner-iklan",
        name: "/MenuBannerIklan",
        component: MenuBannerIklan,
      },
      {
        path: "MenuBannerArtikel",
        name: "/MenuBannerArtikel",
        component: MediaIsiArtikel,
      },
      {
        path: "profile-menu",
        name: "/profile-menu",
        component: Profile,
      },
    ],
  },

  {
    path: "/login",
    name: "AdminLogin",
    component: layout2,
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
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});

// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem("token", true);
//   console.log(token);
//   // Tujuan selain admin login => gaada token => balik lagi ke admin login
//   if (to.name !== "AdminLogin" && token == null) next({ name: "AdminLogin" });

//   // Tujuan ke login => ada token => balik ke home
//   if (to.name === "AdminLogin" && token) next({ name: "home" });
//   else next();
// });

export default router;
