<template>
  <v-main class="main">
    <v-app-bar id="bar" class="rounded-b-xl" elevation="3">
      <h2 class="white--text font-weight-medium">Menu Berita Artikel</h2>
    </v-app-bar>

    <v-card class="rounded-xl pa-10 ma-10">
      <div>
        <v-col xs="12" md="6">
          <h2>Judul Artikel</h2>

          <v-text-field
            v-model="judulArtikel"
            outlined
            label="Masukkan Judul Artikel"
            :rules="JudulRules"
            counter
            maxlength="50"
            hint="Judul tidak melebihi 50 huruf"
          ></v-text-field>
        </v-col>

        <v-col>
          <h2>Isi Artikel</h2>
          <v-textarea
            v-model="isiArtikel"
            outlined
            name="input-7-4"
            label="Ketik Berita Disini"
            :rules="ArtikelRules"
            height="500"
            counter
            maxlength="3000"
          ></v-textarea>
        </v-col>

        <v-layout justify-center>
          <v-btn
            depressed
            color="primary"
            x-large
            class="mr-3"
            @click="() => goTo()"
            >Kembali</v-btn
          >

          <v-btn outlined depressed color="primary" x-large @click="submit"
            >Save</v-btn
          >
        </v-layout>
      </div>
    </v-card>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      judulArtikel: "",
      isiArtikel: "",

      JudulRules: [(v) => v.length <= 49 || "Maksimal 50 Karakter"],
      ArtikelRules: [(v) => v.length <= 2999 || "Maksimal 3000 Karakter"],
    };
  },

  methods: {
    submit() {
      console.log(this.judulArtikel, this.isiArtikel);
      this.judulArtikel = "";
      this.isiArtikel = "";
    },
    goTo() {
      return this.$router.push("/crud-mediaartikel");
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

