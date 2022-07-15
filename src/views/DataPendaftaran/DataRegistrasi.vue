<template>
  <v-main class="main">
 <v-app-bar id="bar" class="rounded-b-xl" elevation="3">
      <h2 class="white--text font-weight-medium">Data Registrasi Vaksinasi</h2>
    </v-app-bar>
    <v-container>
      <v-row class="justify-space-between">
        <v-col cols="6">
          <div class="d-flex my-2">
            <p class="my-2 mx-2">Filter</p>
            <v-btn outlined color="primary">
              Semua <v-icon color="black" size="15"> mdi-chevron-down </v-icon>
            </v-btn>
          </div>
        </v-col>
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
      <DataVaksin />
    </v-container>
  </v-main>
</template>
<script>
import DataVaksin from "../../components/data.vue";
export default {
  name: "DataRegistrasi",
  components: {
    DataVaksin,
  },
};
</script>

<style>
.main {
  background: linear-gradient(180deg, #ffffff 14.37%, #e3f5fd 100%);
}
</style>
