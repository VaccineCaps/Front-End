<template>
  <v-main>
    <h3 class="font-weight-Reguler">Riwayat Vaksin Masuk</h3>
    <v-row class="justify-space-between">
      <v-col cols="6">
        <div class="d-flex my-2">
          <p class="my-2 mx-2">Filter</p>
          <v-btn outlined color="primary">
            Semua <v-icon color="black" size="15"> mdi-chevron-down </v-icon>
          </v-btn>
        </div>
      </v-col>
      <v-col cols="4">
        <v-text-field
          append-icon="mdi-magnify"
          dense
          class="rounded-xl"
          placeholder=" Masukkan hal yang ingin dicari"
          outlined
          color="primary"
          x-small
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-card width="auto" outlined color="primary" elevation="1">
      <v-simple-table :search="search">
        <template v-slot:default>
          <thead class="primary">
            <tr>
              <th class="text-left">No</th>
              <th class="text-left">Nama Mitra</th>
              <th class="text-left">Nomor Transaksi</th>
              <th class="text-left">Asal Transaksi</th>
              <th class="text-left">Asal Vaksin</th>
              <th class="text-left">Tanggal Pengiriman</th>
              <th class="text-left">Tujuan</th>
              <th class="text-left">Alamat</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td>{{ item.no }}</td>
              <td>{{ item.nama }}</td>
              <td>{{ item.keterangan }}</td>
              <td>{{ item.keterangan }}</td>
              <td>{{ item.keterangan }}</td>
              <td>{{ item.keterangan }}</td>
              <td>{{ item.keterangan }}</td>
              <td>{{ item.keterangan }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
    <br />
    <template>
      <v-row class="justify-end">
        <v-col cols="6"> </v-col>
        <v-col cols="auto">
          <div class="pagination rounded-lg">
            <v-pagination v-model="page" :length="6"></v-pagination>
          </div>
        </v-col>
      </v-row> </template
  ></v-main>
</template>

<script>
export default {
  name: "MasukComponents",
  data() {
    return {
      page: 1,
      search: "",
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
};
</script>

<style></style>
