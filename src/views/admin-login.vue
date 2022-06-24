<template>
  <v-main class="containers">
    <v-container fluid height="500">
      <!-- login -->
      <div class="test">
        <h1 class="my-5 text-center white--text tulisan">Masuk</h1>
        <v-col cols="12" class="my-5">
          <v-card width="500" class="mx-auto my-10 rounded-xl" elevation="10">
            <v-row>
              <v-col cols="10" md="10" class="mx-auto">
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
                <div class="d-flex justify-end">
                  <div></div>
                  <v-btn text color="transparent">
                    <h5 class="text-end black--text">Lupa Password?</h5>
                  </v-btn>
                </div>

                <v-btn
                  class="rounded-lg tombol my-3"
                  elevation="1"
                  large
                  outlined
                  color="primary"
                  block
                  @click="overlay = !overlay"
                >
                  Login
                </v-btn>

                <v-overlay :value="overlay" :opacity="opacity">
                  <v-container fluid>
                    <v-row>
                      <v-col cols="auto">
                        <v-card>
                          <v-img width="1350" src="../assets/overlay.jpg">
                            <div id="suntik">
                              <v-img
                                class="my-5 mx-auto"
                                width="170"
                                src="../assets/Loading PC.png"
                              ></v-img>

                              <v-col cols="3" class="mx-auto">
                                <v-card
                                  color="primary"
                                  class="rounded-pill"
                                  max-height="25"
                                >
                                  <v-progress-linear
                                    indeterminate
                                    color="white"
                                    class="mb-0"
                                  ></v-progress-linear>
                                </v-card>
                              </v-col>
                            </div>
                          </v-img>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-overlay>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </div>

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
                    to="admin/syarat-penggunaan"
                    >Syarat Pengunaan</v-btn
                  >
                  <br />
                  <v-btn
                    class="rounded-xl"
                    color="primary"
                    block
                    to="admin/kebijakan-privasi"
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
      opacity: 0.5,
      overlay: false,
    };
  },
  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false;
          return this.$router.push("/main-menu");
        }, 3000);
    },
  },
};
</script>

<style>
.overlays {
  background-image: url(../assets/overlay.jpg);
  background-size: 100%;
}
.containers {
  background-image: url(../assets/LOGIN\ ADMIN\ BARU.png);
  background-size: 100%;
}
.tombol {
  margin-bottom: 10px;
}
.tulisan {
  margin-top: 25px;
}
.test {
  margin-top: 55px;
  margin-bottom: 140px;
}
.cards {
  background-image: url(../assets/overlay.jpg);
  background-size: 100%;
}
#suntik {
  margin-top: 250px;
}
</style>
