<template>
  <v-main>
    <div class="d-flex justify-space-between">
      <v-col cols="6">
        <div class="d-flex my-2">
          <p class="my-2 mx-2">Filter</p>
          <v-btn outlined color="primary">
            Semua <v-icon color="black" size="15"> mdi-chevron-down </v-icon>
          </v-btn>
        </div>
      </v-col>
      <v-col cols="4">
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          dense
          class="rounded-xl"
          placeholder=" Masukkan hal yang ingin dicari"
          outlined
          color="primary"
          x-small
        >
        </v-text-field>
      </v-col>
    </div>

    <v-card width="auto" outlined color="primary" elevation="1">
      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        hide-default-footer
        @page-count="pageCount = $event"
      >
      </v-data-table>
    </v-card>
    <br />
    <template>
      <v-row class="justify-end">
        <v-col cols="6"> </v-col>
        <v-col cols="auto">
          <div class="pagination rounded-lg">
            <v-pagination v-model="page" :length="6"></v-pagination>
          </div>
        </v-col>
      </v-row>
    </template>
  </v-main>
</template>

<script>
export default {
  name: "KeluarComponents",
  data() {
    return {
      pageCount: 0,
      itemsPerPage: 3,
      page: 1,
      search: "",
      headers: [
        {
          text: "No",
          value: "no",
        },
        { text: "Nama Rumah Sakit", value: "namaRS" },
        { text: "Nomor Transaksi", value: "Nt" },
        { text: "Distributor", value: "Ad" },
        { text: "Tanggal Pengiriman", value: "Tp" },
        { text: "E-mail", value: "email" },
        { text: "Jenis Vaksin", value: "jenis" },
      ],

      desserts: [
        {
          namaRS: "RS. Bakti Timah",
          no: 1,
        },

        {
          namaRS: "RS. Umum",
          no: 2,
        },
        {
          namaRS: "RS. Ir. SoekarnO",
          no: 4,
        },
        {
          namaRS: "RS. Ir. SoekarnO",
          no: 5,
        },
        {
          namaRS: "RS. Ir. SoekarnO",
          no: 6,
        },
        {
          namaRS: "RS. Ir. SoekarnO",
          no: 7,
        },
      ],
    };
  },
};
</script>
<style></style>
