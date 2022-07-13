import Vue from "vue";
import VueRouter from "vue-router";

import succes from "@/views/PembuatanVaksin/successAddSesessions.vue";
import sessions from "@/views/PembuatanVaksin/vaksinasiSession.vue";
import addSessions from "@/views/PembuatanVaksin/createVaksinasiSession.vue";
import preview from "@/views/previewSesiVaksin.vue";

import layout from "@/layouts/indexLay.vue";
import layout2 from "@/layouts/indexLay2.vue";

import SyaratPenggunaan from "@/views/syarat-penggunaan.vue";
import KebijakanPrvasi from "@/views/kebijakan-privasi.vue";

import stokVaksin from "@/views/Stok/stok-vaksin";
import laporanBaru from "../views/Stok/laporan-baru";
import VaksinKeluar from "../views/Stok/vaksin-keluar";
import VaksinMasuk from "../views/Stok/vaksin-masuk";

import MenuBannerIklan from "@/views/Media/MenuBannerIklan.vue";

import MediaArtikel from "@/views/Media/media-dan-berita.vue";
import DataRegis from "@/views/DataPendaftaran/DataRegistrasi.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "Dashboard",
    component: layout,
    children: [
      {
        path: "/",
        name: "",
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
      {
        path: "sessions",
        name: "sessions",
        component: sessions,
        children: [
          {
            path: "",
            name: "",
            component: sessions,
          },
          {
            path: "addsessions",
            name: "addsessions",
            component: addSessions,
          },
          {
            path: "succes",
            name: "succes",
            component: succes,
          },

          {
            path: "preview",
            name: "preview",
            component: preview,
          },
        ],
      },
      {
        path: "media-dan-artikel",
        component: layout,
        children: [
          {
            path: "",
            name: "",
            component: MediaArtikel,
          },
          {
            path: "menu-banner-iklan",
            name: "/MenuBannerIklan",
            component: MenuBannerIklan,
          },
        ],
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
      {
        path: "profile-menu",
        name: "MenuProfile",
        component: () => import("@/views/profile-menu"),
      },
    
     

     
    ],
  },

  // RAJA

  // Bang Taris

  // zikri
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});

export default router;
