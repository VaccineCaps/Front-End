<template>
  <v-main class="main">
    <v-row height="1000">
      <v-col cols="2" width="500">
        <SideBar />
      </v-col>
      <v-col cols="10">
      <v-toolbar
      class="toolbar"
      elevation="3"
      color="light-blue lighten-5"
    >
      <h2>Data Registrasi Vaksinasi</h2>
    </v-toolbar>
    <v-container>
      
      
      <DataVaksin />
    </v-container>
      </v-col>
    </v-row>
    
  </v-main>
</template>
<script>
import DataVaksin from "../../components/data.vue";
import SideBar from "../../components/SideBar.vue"
export default {
  name: "DataRegistrasi",
  components: {
    DataVaksin,
    SideBar
  },
};
</script>

<style>
.main {
  background: linear-gradient(180deg, #ffffff 14.37%, #e3f5fd 100%);
}
.toolbar{
  margin-left: -23px;
}
.rows{
  height: 700px;
}
</style>
