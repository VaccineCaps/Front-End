<template>
  <v-main>
    <v-card width="auto" outlined color="primary" elevation="1">
      <v-simple-table>
        <template v-slot:default>
          <thead class="primary">
            <tr>
              <th class="text-left">No</th>
              <th class="text-left">Nama Rumah Sakit</th>
              <th class="text-left">Nomor Transaksi</th>
              <th class="text-left">Asal Distributor</th>
              <th class="text-left">Tanggal Pengiriman</th>

              <th class="text-left">E-mail</th>
              <th class="text-left">Jenis Vaksin</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td>{{ item.no }}</td>
              <td>{{ item.namaRS }}</td>
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
      </v-row>
    </template>
  </v-main>
</template>

<script>
export default {
  name: "KeluarComponents",
  data() {
    return {
      page: 1,
      desserts: [
        {
          namaRS: "RS. Bakti Timah",
          no: 1,
        },

        {
          namaRS: "RS. Umum",
          no: 2,
        },
        {
          namaRS: "RS. Ir. Soekarna",
          no: 3,
        },
      ],
    };
  },
};
</script>
<style></style>
