<template>
  <v-main class="main">
    <v-toolbar
      class="toolbar rounded-xl"
      elevation="3"
      color="light-blue lighten-5"
    >
      <h2>Data Registrasi Vaksinasi</h2>
    </v-toolbar>
    <v-container>
      
      
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
