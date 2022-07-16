<template>
  <v-app style="background: linear-gradient(#ffffff, #cdf0ff)">
    <v-app-bar id="bar" class="rounded-b-xl" elevation="3">
      <h2 class="white--text font-weight-medium">Pembuatan Sesi Vaksin</h2>
    </v-app-bar>
    <v-container style="margin-top: 20px" class="px-10">
      <!-- Tambah Sesi Baru -->
      <div id="putus">
        <v-toolbar color="transparent" elevation="0" @click="() => gas()">
          <v-btn color="transparent" text icon width="100%" height="100%">
            <v-icon large color="black">mdi-plus-circle-outline</v-icon>
            <h2 class="fontss font-weight-medium mx-3">Buat Sesi Baru</h2>
          </v-btn>
        </v-toolbar>
      </div>

      <br />

      <!-- Button -->
      <h2>Sesi Vaksinasi Yang Tersedia</h2>

      <br />

      <v-row class="justify-space-between" style="height: 120px">
        <v-col cols="6"> </v-col>
        <v-col cols="5">
          <v-text-field
            class="rounded-xl"
            placeholder=" Masukkan hal yang dicari"
            outlined="primary"
            x-small
          >
          </v-text-field>
        </v-col>
      </v-row>
      <!-- List Sesi Vaksinasi -->

      <v-card
        v-for="n in 3"
        :key="n"
        style="
          border: solid #1789bc;
          margin-top: 20px;
          border-radius: 10px;
          padding: 10px;
        "
      >
        <v-card-title style="background-color: #1789bc; border-radius: 15px"
          >RS. Bakti Timah</v-card-title
        ><br />
        <v-card-actions>Jl.Merdeka no 45</v-card-actions>
        <v-card-actions>Sesi I (08.00-10.00 WIB)</v-card-actions>
        <v-card-actions>Jenis Vaksin Sinovac</v-card-actions>
        <v-card-actions>Stok Vaksin 1000 buah</v-card-actions>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  name: "vaksinasiSessionPage",
  mounted() {
    const response = axios
      .get("/session/" + this.selectedRoute)
      .then((response) => (this.chosenRoute = response.data));
    console.log("response get", response);
  },

  methods: {
    gas() {
      return this.$router.push("/addsessions");
    },
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
.fontss {
  color: rgb(27, 27, 27);
}
</style>
