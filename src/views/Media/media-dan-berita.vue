<template>
  <v-main>
    <v-app-bar id="bar" class="rounded-b-xl" elevation="3">
      <h2 class="white--text font-weight-medium">Media dan Artikel</h2>
    </v-app-bar>
    <v-container fluid>
      <v-app-bar
        @click="() => redirect()"
        id="app-bars"
        height="100"
        width="1250"
        class="mx-auto rounded-lg"
        elevation="3"
      >
        <v-row>
          <v-col cols="11"
            ><h2 class="black--text font-weight-medium">
              Menu Banner Iklan
            </h2></v-col
          >
          <v-col cols="1" class="text-end my-2">
            <v-icon color="primary">mdi-circle</v-icon></v-col
          >
        </v-row>
      </v-app-bar>
      <br />
      <v-app-bar
        @click="() => pushPage()"
        id="app-bar"
        height="100"
        width="1250"
        class="mx-auto rounded-lg"
        elevation="3"
      >
        <v-row>
          <v-col cols="11"
            ><h2 class="black--text font-weight-medium">
              Menu Berita dan Artikel
            </h2></v-col
          >
          <v-col cols="1" class="text-end my-2">
            <v-icon color="primary">mdi-circle</v-icon></v-col
          >
        </v-row>
      </v-app-bar>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "MediaBerita",
  methods: {
    pushPage() {
      return this.$router.push("/Menu Berita dan Artikel");
    },
    redirect() {
      return this.$router.push("/media-dan-artikel/menu-banner-iklan");
    },
  },
};
</script>

<style>
#app-bars {
  background-color: rgba(180, 241, 255, 1);
}
#app-bar {
  background-color: rgba(180, 241, 255, 1);
}
#bar {
  background-color: rgba(34, 155, 216, 1);
}
</style>
