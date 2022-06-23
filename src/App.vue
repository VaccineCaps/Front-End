<template>
  <v-app>
    <v-main class="main">
      <router-view/>
    </v-main> 
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
.main {
  background: linear-ient(180deg, #ffffff 14.37%, #e3f5fd 100%);
}
</style>
