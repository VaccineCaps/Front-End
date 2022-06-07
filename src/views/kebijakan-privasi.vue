<template>
  <v-main>
    <v-app-bar height="150" color="light-blue lighten-5">
      <h2 class="black--text">Kebijakan Privasi</h2>
    </v-app-bar>
    <Kebijakan />
  </v-main>
</template>

<script>
import Kebijakan from "../components/Kebijakan-privasi";
export default {
  name: "KebijakanPage",
  components: {
    Kebijakan,
  },
};
</script>

<style></style>
