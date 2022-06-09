<template>
  <v-main>
    <v-app-bar id="bar" class="rounded-lg" elevation="3">
      <h2>Profile Menu</h2>
    </v-app-bar>
    <hr />
    <v-app-bar dark color="transparent" elevation="3" height="200">
      <div class="mx-auto">
        <div>
          <v-btn class="mx-11 my-3" outlined large fab color="indigo">
            <v-avatar>
              <v-img src="../assets/logo.png"></v-img>
            </v-avatar>
          </v-btn>
        </div>

        <v-btn text color="transparent">
          <h3 class="black--text text-center">Super Admin</h3>
        </v-btn>
      </div>
    </v-app-bar>
    <hr />
    <v-container>
      <v-card elevation="0">
        <v-list>
          <template>
            <v-list-item-group color="primary">
              <v-list-item
                ><h3 class="font-weight-medium">
                  Daftar Super Admin
                </h3></v-list-item
              >
              <hr class="line" />
              <v-list-item @click="dialog = true"
                ><h3 class="font-weight-medium">
                  Tentang I-Vaksin
                </h3></v-list-item
              >
              <hr class="line" />
              <v-dialog
                transition="dialog-top-transition"
                max-width="500"
                :value="dialog"
                class="rounded-xl"
                persistent
              >
                <template>
                  <v-card
                    height="auto"
                    width="500"
                    color="white"
                    class="rounded-xl"
                  >
                    <v-card height="auto" elevation="5" color="white">
                      <v-card-title class="primary--text">
                        <h3 class="mx-auto">Tentang I-VAKSIN</h3>
                      </v-card-title>
                    </v-card>
                    <v-card-title class="title primary--text">
                      <h4>I-VAKSIN</h4>
                    </v-card-title>
                    <v-card-subtitle>
                      <p>
                        Merupakan sebuah aplikasi yang berfungsi sebagai media
                        registrasi vaksinasi bagi seluruh masyarakat umum dengan
                        beberapa fitur seperti berita terkini terkait virus yang
                        menyebar dan artikel kesehatan lainnya
                      </p>
                      <p>
                        Aplikasi ini diluncurkan pada tahun 2021 guna membantu
                        mobilitas para petugas kesehatan dalam menangani
                        vaksinasi nasional
                      </p>

                      <v-btn
                        class="mx-auto"
                        x-large
                        color="primary"
                        block
                        @click="dialog = false"
                        >Kembali</v-btn
                      >
                      <br />
                    </v-card-subtitle>
                  </v-card>
                </template>
              </v-dialog>
              <v-list-item>
                <h3 class="font-weight-medium">Maintenance</h3></v-list-item
              >
              <hr class="line" />
              <v-list-item
                ><h3 class="font-weight-medium">Bahasa</h3></v-list-item
              >
              <hr class="line" />
              <v-list-item
                ><h3 class="font-weight-medium">Logout</h3></v-list-item
              >
              <hr class="line" />
            </v-list-item-group>
          </template>
        </v-list>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "ProfilePage",
  data() {
    return {
      dialog: false,
      desserts: [
        { name: "Daftar Super Admin" },
        { name: "Tentang I-Vaksin" },
        { name: "Maintenance" },
        { name: "Bahasa" },
        { name: "Logout" },
      ],
    };
  },
};
</script>

<style>
.line {
  border-bottom-width: 3px;
  border-color: rgba(163, 163, 163, 0.158);
}
.title {
  margin-bottom: 20px;
}
#bar {
  background-color: rgba(34, 155, 216, 1);
  margin-bottom: 10px;
}
</style>
