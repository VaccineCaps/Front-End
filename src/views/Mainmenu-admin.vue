<template>
  <v-app id="app">
    <div @click="() => pushTo()">
      <v-toolbar color="#B2EBF2" height="80">
        <v-btn rounded color="info" height="60">
          <v-avatar size="50" color="#FFFFFF" class="ml-n2 mr-2">
            <v-img src="../assets/logo.png"></v-img>
          </v-avatar>
          Super Admin
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn fab color="primary">
          <v-icon size="45"> mdi-account-circle </v-icon>
        </v-btn>
      </v-toolbar>
    </div>

    <div>
      <v-carousel height="252" weight="1280">
        <v-carousel-item
          contain
          class="black"
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
        </v-carousel-item>
      </v-carousel>
    </div>

    <div>
      <v-card class="rounded-xl ma-10 py-1" color="#FFFFFF" flat>
        <v-layout flex-wrap>
          <v-flex xs12 md6 lg6>
            <v-card
              color="#B2EBF2"
              class="ma-5 rounded-xl"
              elevation="5"
              flat
              to="data-pendaftaran-vaksinasi"
            >
              <v-card-title>Data Pendaftaran Vaksinasi</v-card-title>
              <v-card-text>pendataan registrasi vaksin</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 md6 lg6>
            <v-card
              color="#B2EBF2"
              class="ma-5 rounded-xl"
              elevation="5"
              flat
              to="/stok-vaksin"
            >
              <v-card-title>Stok Vaskin</v-card-title>
              <v-card-text>Cek penambahan atau pengurangan vaksin</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 md6 lg6>
            <v-card
              color="#B2EBF2"
              class="ma-5 rounded-xl"
              elevation="5"
              flat
              to="/sessions"
            >
              <v-card-title>Pembuatan Sesi Vaksinasi</v-card-title>
              <v-card-text
                >Pembuatan jadwal vaksinasi mulai dari sesi, tempat, dan
                lokasi</v-card-text
              >
            </v-card>
          </v-flex>

          <v-flex xs12 md6 lg6>
            <v-card
              color="#B2EBF2"
              class="ma-5 rounded-xl"
              elevation="5"
              flat
              to="/media-dan-artikel"
            >
              <v-card-title>Media dan Artikel</v-card-title>
              <v-card-text>Tambah berita seputar kesehatan </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-card>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://storage.googleapis.com/proudcity/jacksonms/uploads/2020/06/NWHN_Web_Banner_Covid19_FINAL.png",
        },
        {
          src: "https://www.toronto.ca/wp-content/uploads/2020/04/958b-covid-19-mental-health-banner.jpg",
        },
        {
          src: "https://www.iaea.org/sites/default/files/styles/2016_landing_page_banner_1140x300/public/images/hhc-covid19-banner.jpg?itok=HzkrewMn",
        },
        {
          src: "https://www.isc.co.uk/media/6836/covid-banner.jpg?center=0.51598173515981738,0.585&mode=crop&width=2048&height=533&quality=80&slimmage=true",
        },
      ],
    };
  },
  methods: {
    pushTo() {
      return this.$router.push("/profile-menu");
    },
  },
};
</script>

<style>
#app {
  background: linear-gradient(180deg, #ffffff 14.37%, #e3f5fd 100%);
}

/* .main {
  background: linear-gradient(180deg, #ffffff 14.37%, #e3f5fd 100%);
} */
</style>
