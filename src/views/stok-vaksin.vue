<template>
  <v-main class="main">
    <v-app-bar id="bar" class="rounded-lg" elevation="3">
      <h2>Stok Vaksin</h2>
    </v-app-bar>
    <v-container fluid>
      <div id="putus">
        <v-toolbar color="transparent" elevation="0">
          <v-btn color="transparent" text icon width="100%" height="100%">
            <v-icon large color="black">mdi-plus-circle-outline</v-icon>
            <h2 class="fontss font-weight-medium mx-3">Buat Laporan Baru</h2>
          </v-btn>
        </v-toolbar>
      </div>
      <br />
      <v-card width="700" outlined color="primary" elevation="1">
        <v-simple-table>
          <template v-slot:default>
            <thead class="primary">
              <tr>
                <th width="50" class="text-left">No</th>
                <th width="200" class="text-left">Nama</th>
                <th width="auto" class="text-left">Keterangan</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in desserts" :key="item.name">
                <td>{{ item.no }}</td>
                <td>{{ item.nama }}</td>
                <td>{{ item.keterangan }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
      <v-row class="justify-space-between my-2">
        <v-col cols="6">
          <div class="d-flex my-2">
            <p class="my-2 mx-2">Filter</p>
            <v-btn outlined color="primary">
              Semua <v-icon color="black" size="15"> mdi-chevron-down </v-icon>
            </v-btn>
          </div>
        </v-col>
        <v-col cols="5">
          <v-text-field
            class="rounded-xl"
            placeholder=" Masukkan hal yang dicari"
            outlined="primary"
            x-small
          >
          </v-text-field>
        </v-col>
      </v-row>
      <h3 class="font-weight-Reguler">Riwayat Vaksin Masuk</h3>
      <br />
      <Masuk />
      <h3 class="font-weight-Reguler">Riwayat Vaksin Keluar</h3>
      <br />
      <Keluar />
    </v-container>
  </v-main>
</template>

<script>
import Masuk from "../components/stokVaksin/Masuk";
import Keluar from "../components/stokVaksin/Keluar";
export default {
  name: "VaccineStok",
  data() {
    return {
      page: 1,
      desserts: [
        {
          nama: "Rumah Sakit",
          no: 1,
        },

        {
          nama: "Sesi",
          no: 2,
        },
        {
          nama: "Tanggal",
          no: 3,
        },
        {
          nama: "Jenis Vaksin",
          no: 4,
        },
        {
          nama: "Jumlah Vaksin",
          no: 5,
        },
      ],
    };
  },

  components: {
    Masuk,
    Keluar,
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
.main {
  background: linear-gradient(180deg, #ffffff 14.37%, #e3f5fd 100%);
}
.fontss {
  color: rgb(27, 27, 27);
}
</style>
