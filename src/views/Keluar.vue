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
        <template v-slot:[`item.Sp`]="{ item }">
          <v-btn
            class="error"
            v-bind:class="{ primary: isActive }"
            @click="(e) => changeColor(e)"
          >
            {{ item.Sp }}
          </v-btn>
        </template>
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
  methods: {
    changeColor: function (e) {
      let target = e.target;
      if (target.classList.contains("primary")) {
        target.classList.remove("primary");
        target.classList.add("error");
        target.firstChild.innerText = "BELUM";
        /*
        https://www.topcoder.com/thrive/articles/fetch-api-javascript-how-to-make-get-and-post-requests
        
        fetch('http://tujuan.backend', {
          method:'post,
          body: JSON.stringify({
            id:??
            status:??
          })
        })
        .catch(error => console.error('Error:', error))
        */
      } else {
        target.classList.add("primary");
        target.classList.remove("error");
        target.firstChild.innerText = "SUDAH";
      }
    },
    myFilter: function () {
      this.isActive = !this.isActive;
    },
  },

  data() {
    return {
      pageCount: 0,
      itemsPerPage: 3,
      isActive: false,
      page: 1,
      search: "",
      headers: [
        {
          text: "No",
          value: "no",
          width: 70,
        },
        { text: "Nama Rumah Sakit", value: "namaRS", width: 200 },
        { text: "Nomor Transaksi", value: "Nt", width: 200 },
        { text: "Distributor", value: "Ad", width: 200 },
        { text: "Tanggal Pengiriman", value: "Tp", width: 200 },
        { text: "E-mail", value: "email", width: 200 },
        { text: "Jenis Vaksin", value: "jenis", width: 200 },
        { text: "Jumlah", value: "jumlah", width: 200 },
        { text: "Status Penerimaan", value: "Sp", width: 200 },
      ],

      desserts: [
        {
          no: 1,
          namaRS: "RS. Bakti Timah",
          Nt: "PLMAA16157522118",
          Ad: "Kalbe",
          Tp: "05/03/2022",
          email: "Kalbe@gmail.com",
          jenis: "Sinovak",
          jumlah: "1000",
          Sp: "belum",
        },

        {
          no: 2,
          namaRS: "RS. Umum",
          Nt: "PLMXA12157334118",
          Ad: "Kalbe",
          Tp: "05/03/2022",
          email: "Kalbe@gmail.com",
          jenis: "Sinovak",
          jumlah: "1000",
          Sp: "belum",
        },
        {
          no: 3,
          namaRS: "RS. Ir. Soekarno",
          Nt: "PLMXA12157334118",
          Ad: "Kalbe",
          Tp: "05/03/2022",
          email: "Kalbe@gmail.com",
          jenis: "Sinovak",
          jumlah: "1000",
          Sp: "belum",
        },
        {
          namaRS: "RS. ke 5",
          no: 5,
        },
        {
          namaRS: "RS. ke 6",
          no: 6,
        },
        {
          namaRS: "RS. Ir. ke 7",
          no: 7,
        },
      ],
    };
  },
};
</script>
  
<style>
button span {
  pointer-events: none;
}
</style>
