<template>
  <v-main>
    <v-container>
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
          table-black
          :headers="headers"
          :items="desserts"
          :search="search"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          @page-count="pageCount = $event"
          ><template v-slot:[`item.vaksin`]="{ item }">
            <v-chip :color="getColor(item.vaksin)" dark>
              {{ item.vaksin }}
            </v-chip>
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
      <h1>{{ dessertss.OtherPersons }}</h1>
    </v-container>
  </v-main>
</template>

<script>
import axios from "axios";
export default {
  name: "KeluarComponents",

  data() {
    return {
      dessertss: [],
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
      announc: [
        {
          pengumuman: "No data entry",
        },
      ],
      desserts: [],
    };
  },

  methods: {
    getColor(vaksin) {
      if (vaksin > 1) return "red";
      else if (vaksin > 2) return "orange";
      else return "green";
    },
  },

  async mounted() {
    const response = await axios.get("/others");
    // console.log(response.data)
    this.desserts = response.data.OtherPersons;
    console.log(this.desserts);

    // if(response==204){

    // }
  },
};
</script>
<style></style>
