<template>
  <v-main class="main">
    <v-app-bar id="bar" class="rounded-b-xl" elevation="3">
      <h2 class="white--text font-weight-medium">Stok Vaksin</h2>
    </v-app-bar>
    <v-container fluid>
      <div id="putus">
        <v-toolbar color="transparent" elevation="0" @click="() => goTo()">
          <v-btn color="transparent" text icon width="100%" height="100%">
            <v-icon large color="black">mdi-plus-circle-outline</v-icon>
            <h2 class="fontss font-weight-medium mx-3">Buat Laporan Baru</h2>
          </v-btn>
        </v-toolbar>
      </div>
      <br />
      <v-row>
        <v-col cols="6">
          <v-card width="auto" outlined color="primary" elevation="1">
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
        </v-col>
        <v-col cols="6">
          <v-img
            class="mx-auto"
            width="525"
            height="300"
            src="../../assets/picture.png"
          ></v-img>
        </v-col>
      </v-row>

      <br />
      <Masuk />
      <br />
      <h3 class="font-weight-Reguler">Riwayat Vaksin Keluar</h3>

      <Keluar />
    </v-container>
  </v-main>
</template>

<script>
import Masuk from "../../components/stokVaksin/Masuk";
import Keluar from "../../components/stokVaksin/Keluar";
export default {
  name: "VaccineStok",
  methods: {
    goTo() {
      return this.$router.push("/laporan-baru");
    },
  },
  data() {
    return {
      page: 1,
      desserts: [
        {
          nama: "Rumah Sakit",
          no: 1,
          keterangan: "Rumah Sakit Bakti Timah",
        },

        {
          nama: "Sesi",
          no: 2,
          keterangan: "1",
        },
        {
          nama: "Tanggal",
          no: 3,
          keterangan: "21 Juni 2001",
        },
        {
          nama: "Jenis Vaksin",
          no: 4,
          keterangan: "Rumah Sinovac",
        },
        {
          nama: "Jumlah Vaksin",
          no: 5,
          keterangan: "1000",
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
#bar {
  background-color: rgba(34, 155, 216, 1);
}
</style>
