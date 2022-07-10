import Vue from "vue";
import VueRouter from "vue-router";

import succes from "@/views/PembuatanVaksin/successAddSesessions.vue";
import sessions from "@/views/PembuatanVaksin/vaksinasiSession.vue";
import addSessions from "@/views/PembuatanVaksin/createVaksinasiSession.vue";
import preview from "@/views/previewSesiVaksin.vue";

import layout from "@/layouts/indexLay.vue";

import SyaratPenggunaan from "@/views/syarat-penggunaan.vue";
import KebijakanPrvasi from "@/views/kebijakan-privasi.vue";

import stokVaksin from "@/views/Stok/stok-vaksin";
import laporanBaru from "../views/Stok/laporan-baru";
import VaksinKeluar from "../views/Stok/vaksin-keluar";
import VaksinMasuk from "../views/Stok/vaksin-masuk";

import MainmenuAdmin from "@/views/Mainmenu-admin.vue";
import MenuBannerIklan from "@/views/Media/MenuBannerIklan.vue";

import MediaArtikel from "@/views/Media/media-dan-berita.vue";
import DataRegis from "@/views/DataPendaftaran/DataRegistrasi.vue";



import Test from "@/views/test.vue"
// import Teslogin from "@/views/tes-login"


Vue.use(VueRouter);

const routes = [
  {
    path: "/test-login", 
    component: {
      default:()=> import("@/views/tes-login"),
      // sideBar:()=> import("@/components/tes-side-bar.vue")
    } 
  },
  
  {
    path:"/test-api",
    name: "ApiLogin",
    component: Test,  
  },
  {
    path: "/",
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
        path: "/main-menu",
        name: "MainmenuAdmin",
        component: MainmenuAdmin,
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
      {
        path: "sessions",
        name: "sessions",
        component: layout,
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
      {
        path: "data-pendaftaran-vaksinasi",
        component: layout,
        children: [
          {
            path: "",
            name: "",
            component: DataRegis,
          },
        ],
      },
    ],
  },

 
];

const router = new VueRouter({
  mode: "history",
  base: "/admin",
  routes,
});

export default router;
