<template>
  <v-main class="main">
    <v-app-bar id="bar" class="rounded-b-xl" elevation="3">
      <h2 class="white--text font-weight-medium">Media & Artikel</h2>
    </v-app-bar>

    <div class="ma-10">
      <!-- Table Banner Iklan -->
      <h2>Banner Iklan</h2>

      <v-card outlined color="primary" elevation="1" class="mt-5">
        <v-data-table
          calculate-widths
          :headers="headersIklan"
          :items="dessertsIklan"
          :search="search"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          @page-count="pageCount = $event"
        >
          <template v-slot:[`item.banner`]="{ item }">
            <v-img :src="item.banner" height="100px"></v-img>
          </template>

          <template v-slot:[`item.action`]="{ item }">
            <v-btn class="mr-2" @click="editItem(item)" color="error"
              >Hapus</v-btn
            >
          </template>
        </v-data-table>
      </v-card>

      <div id="putus" class="mt-5">
        <v-toolbar color="transparent" elevation="0" @click="() => goTo()">
          <v-btn color="transparent" text icon width="100%" height="100%">
            <v-icon large color="black">mdi-plus-circle-outline</v-icon>
            <h2 class="fontss font-weight-medium mx-3">Banner Iklan Baru</h2>
          </v-btn>
        </v-toolbar>
      </div>

      <!-- Table Artikel Berita -->
      <h2 class="mt-10">Artikel Berita</h2>
      <v-card outlined color="primary" elevation="1" class="mt-5">
        <v-data-table
          calculate-widths
          :headers="headersBerita"
          :items="dessertsBerita"
          :search="search"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          @page-count="pageCount = $event"
        >
          <template v-slot:[`item.action`]="{ item }">
            <v-btn class="mr-2" @click="editItem(item)" color="error"
              >Hapus</v-btn
            >
          </template>
        </v-data-table>
      </v-card>

      <div id="putus" class="mt-5">
        <v-toolbar color="transparent" elevation="0" @click="() => goTo()">
          <v-btn color="transparent" text icon width="100%" height="100%">
            <v-icon large color="black">mdi-plus-circle-outline</v-icon>
            <h2 class="fontss font-weight-medium mx-3">Artikel Baru</h2>
          </v-btn>
        </v-toolbar>
      </div>
    </div>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      pageCount: 0,
      itemsPerPage: 5,
      page: 1,
      search: "",
      headersIklan: [
        { text: "No", value: "no", width: 100 },
        { text: "Banner", value: "banner", sortable: false },
        { text: "Keterangan", value: "keterangan", width: 750 },
        { text: "Action", value: "action", sortable: false },
      ],

      headersBerita: [
        { text: "No", value: "no", width: 100 },
        { text: "Judul", value: "judul" },
        { text: "Keterangan", value: "keterangan", width: 750 },
        { text: "Action", value: "action", sortable: false },
      ],

      dessertsIklan: [
        {
          no: "1",
          keterangan: "Iklan 1",
          banner: "../assets/Frame.png",
        },
        {
          no: "2",
          keterangan: "Iklan 2",
        },
        {
          no: "3",
          keterangan: "Iklan 3",
        },
      ],

      dessertsBerita: [
        {
          no: "1",
          judul: "Bagaimana cara kerja vaksin?",
          keterangan:
            "begitu tubuh memproduksi antibodi dalam respons utamanya terhadap suatu antigen, tubuh juga...",
        },
        {
          no: "2",
          judul: "Tentang vaksin Sinovac",
          keterangan:
            "Vaksin Sinovac adlaah vaksin untuk mencgah infeksi virus SARS-Cov-2 atau COVID-19. Vaksin Sinovac dikenal juga dengan nama CoronaVacine...",
        },
      ],
    };
  },
};
</script>


<style>
#putus {
  border-style: dashed;
  border-width: 3px;
  border-color: rgba(63, 63, 63, 0.801);
  border-radius: 15px;
}
</style>
