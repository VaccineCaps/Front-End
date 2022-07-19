<template>
  <v-main>
    <div class="d-flex justify-space-between">
      <v-row>
        <v-col cols="4">
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            dense
            placeholder=" Masukkan hal yang ingin dicari"
            outlined
            color="primary"
            x-small
          >
          </v-text-field>
        </v-col>
      </v-row>
    </div>

    <v-card outlined color="primary" elevation="1">
      <v-data-table
        calculate-widths
        :headers="headers"
        headers-length="1000"
        :items="desserts"
        :search="search"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        hide-default-footer
        @page-count="pageCount = $event"
      >
        <template v-slot:[`item.status`]="{ item }">
          <v-btn
            fab
            x-small
            class="error mx-1"
            v-bind:class="{ primary: isActive }"
            @click="(e) => changeColor(e)"
          >
            1
            {{ item.Sp }}
          </v-btn>

          <v-btn
            fab
            x-small
            class="error mx-1"
            v-bind:class="{ primary: isActive }"
            @click="(e) => changeColor(e)"
          >
            2
            {{ item.Sp }}
          </v-btn>

          <v-btn
            fab
            x-small
            class="error mx-1"
            v-bind:class="{ primary: isActive }"
            @click="(e) => changeColor(e)"
          >
            3
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
import axios from "axios";

export default {
  name: "KeluarComponents",
  methods: {
    changeColor: function (e) {
      let target = e.target;
      if (target.classList.contains("success")) {
        target.classList.remove("success");
        target.classList.add("error");
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
        target.classList.add("success");
        target.classList.remove("error");
      }
    },
    myFilter: function () {
      this.isActive = !this.isActive;
    },
  },
  data() {
    return {
      pageCount: 0,
      itemsPerPage: 5,
      page: 1,
      search: "",
      headers: [
        { text: "Nama Lengkap", value: "name", width: 200 },
        { text: "NIK", value: "nik" },
        { text: "Tempat Lahir", value: "placeofbirth", width: 200 },
        { text: "Tanggal Lahir", value: "dateofbirth", width: 200 },
        { text: "Alamat Domisili", value: "address", width: 200 },
        { text: "No Hp", value: "phonenumber" },
        { text: "Email", value: "email" },
        { text: "Vaksin ke", value: "vaksin", width: 150 },
        { text: "Jenis Vaksin", value: "jenis", width: 150 },
        { text: "Sesi Vaksin", value: "sesi", width: 150 },
        { text: "Tanggal Vaksin", value: "tanggal", width: 200 },
        { text: "Lokasi Vaksin", value: "lokasi", width: 200 },
        { text: "No Antrian", value: "antrian", width: 150 },
        { text: "Status Vaksin", value: "vaccinestatus", width: 200 },
      ],

      desserts: [],
    };
  },

  async mounted() {
    const response = await axios.get("/others");

    this.desserts = response.data.OtherPersons;
    console.log(this.desserts);
  },
};
</script>
<style></style>
