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
    <v-container>
      <!-- Form Sessions Page -->
      <v-col class="text-center" cols="12">
        <h2>Sesi Vaksinasi Baru</h2>
        <p>Silahkan mengisi data-data yang tercantum dibawah ini.</p>
      </v-col>
      <v-col>
        <v-row>
          <v-col cols="1"> </v-col>

          <v-col cols="10" style="height: 0px">
            <v-card elevation="10" class="mx-3">
              <div>
                <v-card-actions>Rumah Sakit</v-card-actions>
                <v-text-field
                  dense
                  solo
                  label="Masukkan Nama Rumah Sakit"
                  style="border-radius: 5px"
                ></v-text-field>
              </div>
              <div>
                <v-card-actions>Sesi</v-card-actions>
                <v-text-field
                  dense
                  solo
                  label="Masukkan sesi"
                  style="border-radius: 5px"
                ></v-text-field>
              </div>
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
                        style="background-color: white; border-radius: 5px"
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
              <div>
                <v-card-actions>Jenis Vaksin</v-card-actions>
                <v-text-field
                  dense
                  solo
                  label="Masukkan Jenis Vaksin "
                  style="border-radius: 5px"
                ></v-text-field>
              </div>
              <div>
                <v-card-actions>Jumlah Vaksin</v-card-actions>
                <v-text-field
                  dense
                  solo
                  label="Masukkan Jumlah Vaksin"
                  style="border-radius: 5px"
                ></v-text-field>
              </div>
              <br />
              <br />

              <v-col class="text-center" cols="12">
                <v-btn
                  @click="() => GoTo('/preview')"
                  style="
                    color: #1789bc;
                    border: ridge #1789bc;
                    margin-left: 0px;
                  "
                  >Lanjutkan</v-btn
                >
              </v-col>
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
