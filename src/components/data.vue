<template>
  <v-card class="main" elevation="0">
    <v-card>
      <v-simple-table class="">
        <template v-slot:default>
          <thead>
            <tr class="primary">
              <th class="text-left">No.</th>
              <th class="text-left">Nama Lengkap</th>
              <th class="text-left">NIK</th>
              <th class="text-left">Tempat Lahir</th>
              <th class="text-left">Tanggal Lahir</th>
              <th class="text-left">Alamat Domisili</th>
              <th class="text-left">No. Hp</th>
              <th class="text-left">E-mail</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.number">
              <td>{{ item.number }}</td>
              <td>{{ item.number }}</td>
              <td>{{ item.number }}</td>
              <td>{{ item.number }}</td>
              <td>{{ item.number }}</td>
              <td>{{ item.number }}</td>
              <td>{{ item.number }}</td>
              <td>{{ item.number }}</td>
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
  </v-card>
</template>

<script>
export default {
  name: "DataVaksinasi",
  data() {
    return {
      page: 1,
      desserts: [
        {
          number: "1",
        },
        {
          number: "2",
        },
        {
          number: "3",
        },
        {
          number: "4",
        },
        {
          number: "5",
        },
        {
          number: "6",
        },
        {
          number: "7",
        },
        {
          number: "8",
        },
        {
          number: "9",
        },
        {
          number: "10",
        },
      ],
    };
  },
};
</script>

<style>
.pagination {
  background: rgb(119, 213, 253);
}
</style>
