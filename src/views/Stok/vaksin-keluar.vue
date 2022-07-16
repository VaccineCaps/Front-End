<template>
  <v-main>
    <v-app-bar id="bar" class="rounded-b-xl" elevation="3" max-width="1500">
      <h2 class="white--text font-weight-medium">Stok Vaksin</h2>
    </v-app-bar>
    <v-container fluid>
      <div class="mx-10">
        <h1 class="font-weight-regular text-center">
          Registrasi Vaksin Keluar
        </h1>
        <p class="text-center">
          Silahkan mengisi data-data yang tercantum dibawah ini :
        </p>

        <v-card width="1000" height="auto" class="mx-auto" elevation="10">
          <v-container fluid>
            <v-form @submit.prevent="submit" req ref="form">
              <body class="body font-weight-bold">
                Mitra
              </body>
              <hr class="garis" />

              <body class="body">
                Nama Rumah Sakit
              </body>
              <v-select
                :items="item.name"
                outlined
                dense
                solo
                label="Masukkan Nama Rumah Sakit"
                class="fields"
              ></v-select>
              <body class="body">
                Nomor Transaksi
              </body>
              <v-text-field
                outlined
                dense
                solo
                label="Masukkan Nomor Transaksi"
                class="fields"
              ></v-text-field>
              <body class="body">
                Tanggal Pengiriman
              </body>
              <v-text-field
                outlined
                dense
                solo
                label="Masukkan Tanggal Pengiriman"
                class="fields"
              ></v-text-field>
              <body class="body">
                Distributor
              </body>
              <v-text-field
                outlined
                dense
                solo
                label="Masukkan Distributor"
                class="fields"
              ></v-text-field>
              <body class="body">
                Email
              </body>
              <v-text-field
                outlined
                dense
                solo
                label="Masukkan Email"
                class="fields"
              ></v-text-field>

              <body class="body">
                Jenis Vaksin
              </body>
              <v-text-field
                outlined
                dense
                solo
                label="Masukkan Jenis Vaksin"
                class="fields"
              ></v-text-field>
              <body class="body">
                Jumlah
              </body>
              <v-text-field
                outlined
                dense
                solo
                label="Masukkan Jumlah Vaksin"
                class="fields"
              ></v-text-field>
              <v-row>
                <v-col></v-col>
                <v-col>
                  <v-btn
                    x-large
                    block
                    outlined
                    color="primary"
                    class="fields"
                    @click="dialog = true"
                    >Lanjut</v-btn
                  >
                </v-col>
                <!-- dialog -->
                <v-dialog
                  persistent
                  v-model="dialog"
                  width="650"
                  :value="dialog"
                  class="rounded-xl"
                >
                  <v-card
                    elevation="0"
                    height="auto"
                    class="text-center flex-column rounded-xl"
                    style="border: solid #1789bc"
                  >
                    <h2 class="apakah texts font-weight-light">
                      Apakah data yang anda masukkan sudah benar?
                    </h2>
                    <v-divider class="bold"></v-divider>
                    <v-toolbar elevation="0">
                      <v-col cols="6">
                        <v-btn x-large text block @click="submit">
                          <h4 class="texts font-weight-light">Ya</h4>
                        </v-btn>
                      </v-col>
                      <v-divider vertical class="bold"></v-divider>
                      <v-col cols="6">
                        <v-btn x-large text block @click="dialog = false">
                          <h4 class="texts font-weight-light">Tidak</h4>
                        </v-btn>
                      </v-col>
                    </v-toolbar>
                  </v-card>
                </v-dialog>

                <v-col></v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card>
      </div>
    </v-container>
  </v-main>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      item: [],
      dialog: false,
      transaksi: {},
    };
  },

  async mounted() {
    const response = await axios.get("/hospitals");
    this.item = response.data.Hospitalss[0];
    console.log("hospital", this.hospital);
  },
  methods: {
    async submit() {
      const response = await axios.post("/transactionin");
      console.log("Hasil = ", response);
    },
  },
};
</script>

<style>
.apakah {
  padding-bottom: 50px;
  padding-top: 75px;
}
p {
  color: rgba(0, 0, 0, 0.493);
}
.body {
  margin-left: 10px;
}
.fields {
  border-radius: 10px;
}
.garis {
  border-color: rgba(0, 0, 0, 0.356);
  border-width: 1px;
  margin-bottom: 12px;
}
.bold {
  border-width: 1px;
}
.texts {
  color: #1789bc;
}
</style>
