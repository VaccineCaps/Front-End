<template>
  <v-main>
    <v-app-bar id="bar" class="rounded-b-xl" elevation="3">
      <h2 class="white--text font-weight-medium">Stok Vaksin</h2>
    </v-app-bar>
    <v-container fluid>
      <div class="mx-10">
        <h1 class="font-weight-regular text-center">Registrasi Vaksin Masuk</h1>
        <p class="text-center">
          Silahkan mengisi data-data yang tercantum dibawah ini :
        </p>

        <v-card width="1000" height="auto" class="mx-auto" elevation="10">
          <v-container fluid>
            <body class="body font-weight-bold">
              Mitra
            </body>
            <hr class="garis" />

            <body class="body">
              Nama Mitra
            </body>
            <v-text-field
              outlined
              dense
              solo
              label="Masukkan Nama Mitra"
              class="fields"
            ></v-text-field>
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
            <v-dialog
              ref="dialog"
              v-model="modal"
              :return-value.sync="date"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  class="fields"
                  outlined
                  dense
                  solo
                  v-model="date"
                  label="Masukkan Tanggal Pengiriman"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.dialog.save(date)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-dialog>

            <body class="body">
              Asal Vaksin
            </body>
            <v-text-field
              outlined
              dense
              solo
              label="Masukkan Asal Vaksin"
              class="fields"
            ></v-text-field>
            <body class="body">
              Tujuan
            </body>
            <v-text-field
              outlined
              dense
              solo
              label="Masukkan Tujuan"
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
              Jenis
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
                      <v-btn x-large text block>
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
          </v-container>
        </v-card>
      </div>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
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
