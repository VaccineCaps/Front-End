<template>
  <v-main>
    <v-app-bar height="150" color="light-blue lighten-5">
      <h2>Syarat Pengunaan</h2>
    </v-app-bar>
    <Syarat />
  </v-main>
</template>

<script>
import Syarat from "../components/Syarat";
export default {
  name: "SyaratPengunaan",
  components: {
    Syarat,
  },
};
</script>

<style></style>
