<template>
  <v-app>
    <v-main class="main">
      <router-view name="sideBar" />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
