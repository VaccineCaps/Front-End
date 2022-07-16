<template>
  <v-main>
    <v-btn @click="login"> Login </v-btn>
  </v-main>
</template>

<script>
export default {
  name: "bEFOREeach page",
  methods: {
    login() {
      this.$router.push("/test-api");
    },
  },
};
</script>

<style></style>
