<template>
<v-app>
  <v-row>
<v-col cols="3">
  <SideBar/>
</v-col>
<v-col cols="9">

  <v-container>
    
    <router-view/>
</v-container>
    </v-col>
  </v-row>
</v-app>
</template>

<script>
import SideBar from "@/components/stokVaksin/sideBar.vue";
export default {
    name: "layoutsIndex",
    components: { SideBar }
};
</script>

<style></style>
