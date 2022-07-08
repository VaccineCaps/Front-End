<template>
  <v-main class="main">
    <v-app-bar id="bar" class="rounded-b-xl" elevation="3">
      <h2 class="white--text font-weight-medium">Menu Banner Iklan</h2>
    </v-app-bar>

    <v-card class="rounded-xl pa-10 ma-10">
      <v-layout wrap justify-space-around>
        <v-flex xs12 md5>
          <v-title class="text-center"><h1>PREVIEW</h1></v-title>
          <v-img
            :src="url"
            height="400"
            contain
            class="rounded-xl grey"
          ></v-img>
        </v-flex>

        <v-flex xs12 md5>
          <h1><br /></h1>
          <!-- <v-icon large color="black"> mdi-upload </v-icon> -->
          <v-file-input
            class="rounded-xl"
            height="400"
            v-model="image"
            accept=".png, .jpeg, .jpg"
            hint="File extentions (.png, .jpg, .jpeg) File Size limits (max: 10mb)"
            placeholder="Upload profile image"
            prepend-icon=""
            outlined
            filled
            @click:
            clear="url=''"
            @change="Preview_image"
          >
          </v-file-input>
        </v-flex>
      </v-layout>

      <v-layout justify-center class="mt-10">
        <v-btn depressed color="primary" x-large class="mr-3">Kembali</v-btn>
        <v-btn outlined depressed color="primary" x-large>Lanjut</v-btn>
      </v-layout>
    </v-card>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      url: "",
    };
  },

  methods: {
    Preview_image() {
      this.url = URL.createObjectURL(this.image);
    },
  },
};
</script>



<style>
#putus {
  border-style: dashed;
  border-width: 2px;
  border-color: rgba(99, 99, 99, 0.801);
  border-radius: 15px;
}

/* .main {
  background: linear-gradient(180deg, #ffffff 14.37%, #e3f5fd 100%);
} */
.fontss {
  color: rgb(27, 27, 27);
}
#bar {
  background-color: rgba(34, 155, 216, 1);
}
</style>

