<template>
  <v-main>
    <v-container class="container" fluid>
      <!-- login -->
      <h1 class="my-5 text-center white--text tulisan">Masuk</h1>
      <v-col cols="12" class="my-5">
        <v-card width="600" class="mx-auto my-10 rounded-xl" elevation="7">
          <v-row>
            <v-col cols="12" sm="11" class="mx-auto">
              <v-text-field
                class="my-5"
                label="Email"
                prepend-icon="mdi-gmail"
              ></v-text-field>
              <v-text-field
                label="Password"
                prepend-icon="mdi-lock"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                @click:append="show1 = !show1"
              ></v-text-field>
              <h3 class="text-end my-5">Lupa Password?</h3>
              <v-btn
                class="rounded-lg tombol"
                elevation="1"
                large
                outlined
                color="primary"
                block
              >
                Login
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <!-- Dialog Card -->
      <v-row>
        <v-col cols="auto">
          <v-dialog
            transition="dialog-top-transition"
            max-width="450"
            :value="dialog"
            persistent
          >
            <template>
              <v-card
                height="auto"
                width="450"
                color="white"
                class="rounded-xl"
              >
                <v-card height="auto" elevation="10" color="white">
                  <v-card-title class="primary--text">
                    <h4 class="mx-auto">
                      Syarat Penggunaan dan Kebijakan Privasi
                    </h4>
                  </v-card-title>
                </v-card>
                <br />
                <v-card-subtitle>
                  <h2 class="primary--text">
                    I-Vaksin telah mengeluarkan Syarat Penggunaan dan Kebijakan
                    Privasi
                  </h2>
                </v-card-subtitle>
                <v-card-text class="black--text">
                  Syarat Penggunaan dan Kebijakan Privasi adalah sebuah
                  ketentuan yang wajib dikuti dan disetujua oleh Pengguna
                  I-Vaksin sebelum menggunakan aplikasi I-Vaksin
                </v-card-text>
                <v-card-text class="black--text">
                  Lihat Syarat Penggunaan dan kebijakan Privasi disini:
                </v-card-text>
                <v-col cols="10" class="mx-auto">
                  <v-btn
                    class="rounded-xl"
                    color="primary"
                    block
                    to="/syarat-penggunaan"
                    >Syarat Pengunaan</v-btn
                  >
                  <br />
                  <v-btn
                    class="rounded-xl"
                    color="primary"
                    block
                    to="/kebijakan-privasi"
                    >Kebijakan Privasi</v-btn
                  >
                </v-col>
                <br />
                <v-card-text class="black--text">
                  Dengan menyatakan "Setuju", maka Anda menerima segala isi
                  Syarat Penggunaan dan Kebijakan Privasi yang berlaku
                </v-card-text>
                <v-col cols="10" class="mx-auto">
                  <v-btn
                    x-large
                    class="button"
                    color="primary"
                    block
                    @click="dialog = false"
                    >Setuju</v-btn
                  >
                  <br />
                </v-col>
              </v-card>
            </template>
          </v-dialog>
        </v-col>
      </v-row>
      <!-- Picture -->
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "AdminLogin",

  data() {
    return {
      show1: false,
      password: "",
      dialog: true,
      zIndex: 0,
      opacity: 0.85,
    };
  },
};
</script>

<style>
.container {
  background-image: url(../assets/LOGIN\ ADMIN\ BARU.png);
  background-size: 100%;
}
.tombol {
  margin-bottom: 10px;
}
.tulisan {
  margin-top: 25px;
}
</style>
