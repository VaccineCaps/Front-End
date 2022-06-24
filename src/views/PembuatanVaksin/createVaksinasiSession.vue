<template>
  <v-app class="main">
    <h1
      style="
        background-color: #e4f7ff;
        height: 50px;
        border-radius: 15px;
        padding-left: 20px;
      "
    >
      Pembuatan Sesi Vaksinasi
    </h1>
      <!-- Form Sessions Page -->
    <v-container style="height: 800px;">
      <v-col class="text-center" cols="12">
        <h2>Sesi Vaksinasi Baru</h2>
        <p>Silahkan mengisi data-data yang tercantum dibawah ini.</p>
      </v-col>
      <v-col>
        <v-row>
          <v-col cols="1"> </v-col>

          <v-col cols="10" style="height: 0px">
            <v-card elevation="10" class="mx-auto" width="1000" height="auto">
            <v-container fluid>
            <body class="body font-weight-bold">
              Rumah Sakit
            </body>
            <hr class="garis" />
             <body class="body">
              Rumah Sakit
            </body>
             <body class="body">
              Sesi
            </body>
            <v-text-field
              outlined
              dense
              solo
              label="Masukkan Sesi Vaksinasi"
              class="fields"
            ></v-text-field>
            <div>
                <div>
                  <div class="mb-6">
                    Pilih Tanggal: <code>{{ activePicker || "" }}</code>
                  </div>
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                    style="background-color: white"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date"
                        label="Pilih Tanggal"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        class="fields"
                        outlined
                        dense
                        solo
                        style="background-color: white; border-radius: 10px"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date"
                      :active-picker.sync="activePicker"
                      :max="
                        new Date(
                          Date.now() - new Date().getTimezoneOffset() * 60000
                        )
                          .toISOString()
                          .substr(0, 10)
                      "
                      min="1950-01-01"
                      @change="save"
                    ></v-date-picker>
                  </v-menu>
                </div>
              </div>
               <body class="body">
              Jenis Vaksin
            </body>
            <v-text-field
              outlined
              dense
              solo
              label="Masukkan Jenis vaksin"
              class="fields"
            ></v-text-field>
             <body class="body">
              Jumlah Vaksin
            </body>
            <v-text-field
              outlined
              dense
              solo
              label="Masukkan Jumlah vaksin"
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
          </v-col>

          <v-col cols="1"> </v-col>
        </v-row>
      </v-col>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "createVaksinasiSessionPage",
  data: () => ({
    activePicker: null,
    date: null,
    menu: false,
  }),
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
    GoTo() {
      this.$router.push("/preview");
    },
  },
};
</script>

<style>
#putus {
  border-style: dashed;
  border-width: 3px;
  border-color: rgba(63, 63, 63, 0.801);
  border-radius: 15px;
}
.fontss {
  color: rgb(27, 27, 27);
}
</style>
