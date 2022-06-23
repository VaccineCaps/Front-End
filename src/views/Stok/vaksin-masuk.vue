<template>
  <v-main>
    <v-app-bar id="bar" class="rounded-b-xl" elevation="3">
      <h2 class="white--text font-weight-medium">Stok Vaksin</h2>
    </v-app-bar>
    <v-container fluid>
      <div class="mx-10">
        <h1 class="font-weight-regular">Registrasi Vaksin Masuk</h1>
        <p>Silahkan mengisi data-data yang tercantum dibawah ini :</p>

        <v-row>
          <v-col cols="5">
            <body>
              Nama Mitra
            </body>
            <v-dialog ref="dialog" v-model="modals" persistent width="290px">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="gassList"
                  v-bind="attrs"
                  v-on="on"
                  outlined
                  solo
                  dense
                  class="fields"
                  :error-messages="selectErrors"
                  label="Item"
                  required
                  @change="$v.select.$touch()"
                  @blur="$v.select.$touch()"
                ></v-text-field>
              </template>
              <v-card>
                <v-card-title>Select Country</v-card-title>
                <v-divider></v-divider>
                <v-card-text style="height: 300px">
                  <v-radio-group column v-model="input">
                    <v-radio label="Bahamas, The" value="bahamass"></v-radio>
                    <v-radio label="Bahamas, The" value="bahamasa"></v-radio>
                    <v-radio label="Bahamas, The" value="bahamasd"></v-radio>
                    <v-radio label="Bahamas, The" value="bahamasw"></v-radio>
                  </v-radio-group>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-btn color="blue darken-1" text @click="dialog = false">
                    Close
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="inputList">
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <body>
              Nomor Transaksi
            </body>
            <v-text-field
              outlined
              dense
              solo
              placeholder="Masukkan Nomor Transaksi"
              class="fields"
            ></v-text-field>
            <body>
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
                  outlined
                  dense
                  solo
                  class="fields"
                  v-model="date"
                  placeholder="Masukkan Tanggal Pengiriman"
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                no-title
                @input="menu1 = false"
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.dialog.save(date)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-dialog>

            <body>
              Asal Vaksin
            </body>
            <v-text-field
              outlined
              dense
              solo
              placeholder="Masukkan Distributor"
              class="fields"
            ></v-text-field>
            <body>
              Tujuan
            </body>
            <v-text-field
              outlined
              dense
              solo
              placeholder="Masukkan Tujuan"
              class="fields"
            ></v-text-field>
            <body>
              E-mail
            </body>
            <v-text-field
              outlined
              dense
              solo
              placeholder="Masukkan Email"
              class="fields"
            ></v-text-field>
          </v-col>
          <v-col></v-col>
          <v-col cols="5">
            <body>
              Jenis Vaksin
            </body>
            <v-text-field
              outlined
              dense
              solo
              placeholder="Masukkan Jenis Vaksin"
              class="fields"
            ></v-text-field>
            <body>
              Jumlah
            </body>
            <v-text-field
              outlined
              dense
              solo
              placeholder="Masukkan Jumlah Vaksin"
              class="fields"
            ></v-text-field>
            <br />
            <v-row>
              <v-col cols="2"></v-col>
              <v-col cols="8">
                <v-btn x-large block outlined color="primary" class="fields"
                  >Lanjut</v-btn
                ></v-col
              >
              <v-col cols="2"></v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data: () => ({
    modal: false,
    gass: false,
    dialogm1: "",
    dialog: false,
    items: null,
    itemss: [
      "Item 1",
      "Item 2",
      "Item 3",
      "Item 4",
      "Item 5",
      "Item 6",
      "Item 7",
      "Item 8",
    ],
  }),
  methods: {
    inputList() {
      this.input.push(this.gassList);
    },
  },
};
</script>

<style>
p {
  color: rgba(0, 0, 0, 0.493);
}

.fields {
  border-radius: 10px;
}
</style>
