<template>
  <v-main>
    <div class="d-flex justify-space-between">
      <v-row>
      <v-col cols="4">
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          dense
          placeholder=" Masukkan hal yang ingin dicari"
          outlined
          color="primary"
          x-small
        >
        </v-text-field>
     </v-col>
     </v-row>
      
    </div>

    <v-card outlined color="primary" elevation="1">
      <v-data-table
      calculate-widths
        :headers="headers"
        headers-length="1000"
        :items="desserts"
        :search="search"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        hide-default-footer
        @page-count="pageCount = $event"
      ><template v-slot:[`item.vaksin`]="{ item }">
      <v-chip
        :color="getColor(item.vaksin)"
        dark
      >
        {{ item.vaksin }}
      </v-chip>
    </template>
      </v-data-table>
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
   methods: {
      getColor (vaksin) {
        if (vaksin > 1) return 'red'
        else if (vaksin > 2) return 'orange'
        else return 'green'
      },
    },
  data() {
    return {
      
      pageCount: 0,
      itemsPerPage: 5,
      page: 1,
      search: "",
      headers: [
        
        { text: "Nama Lengkap", value: "nama", width: 200,},
        { text: "NIK", value: "nik"},
        { text: "Tempat Lahir", value: "tmpt", width: 200 },
        { text: "Tanggal Lahir", value: "tgl", width:200 },
        { text: "Alamat Domisili", value: "alamat", width: 200 },
        { text: "No Hp", value: "hp" },
        { text: "Email", value: "email" },
        { text: "Vaksin ke", value: "vaksin", width: 150 },
        { text: "Jenis Vaksin", value: "jenis", width: 150},
        { text: "Sesi Vaksin", value: "sesi" , width: 150 },
        { text: "Tanggal Vaksin", value: "tanggal" , width: 150 },
        // { text: "Kota", value: "tempat", width: 150 },
        { text: "Lokasi Vaksin", value: "lokasi", width: 150 },
        { text: "No Antrian", value: "antrian", width: 150 },
        { text: "Status Vaksin", value: "status", width: 150 },
        
      ],

      desserts: [
        {
          nama: "RS. Bakti Timah",
          nik: "1971052106012106010002",
          tmpt: "Pangkalpinang",
          tgl: "21 Juni 2001",
          alamat: "Kota Pangkalpinang",
          hp: "081279979676",
          email: "dzkri.ardfi@gmail.com",
          vaksin: 1,
          jenis: "Pfizer",
          sesi: 1,
          tanggal: "31 Juni 2022",
          tempat: "Jakarta",
          lokasi: "Rumah Sakit Brimob",
          antrian: "778-852",
          status: [
            1,2
          ]


        },
        {
          nama: "RS. Umum",
          nik: "1971052106012106010002",
          tmpt: "Pangkalpinang",
          tgl: "21 Juni 2001",
          alamat: "Kota Pangkalpinang",
          hp: "081279979676",
          email: "dzkri.ardfi@gmail.com",
          vaksin: 3,
          jenis: "Pfizer",
          sesi: 1,
          tanggal: "31 Juni 2022",
          tempat: "Jakarta",
          lokasi: "Rumah Sakit Brimob",
          antrian: "778-852",
          status: [
            1,2
          ]


        },
        {
          nama: "RS. Bakti Timah",
          nik: "1971052106012106010002",
          tmpt: "Pangkalpinang",
          tgl: "21 Juni 2001",
          alamat: "Kota Pangkalpinang",
          hp: "081279979676",
          email: "dzkri.ardfi@gmail.com",
          vaksin: 3,
          jenis: "Pfizer",
          sesi: 1,
          tanggal: "31 Juni 2022",
          tempat: "Jakarta",
          lokasi: "Rumah Sakit Brimob",
          antrian: "778-852",
          status: [
            1,2
          ]


        },
         {
          nama: "RS. Umum",
          nik: "1971052106012106010002",
          tmpt: "Pangkalpinang",
          tgl: "21 Juni 2001",
          alamat: "Kota Pangkalpinang",
          hp: "081279979676",
          email: "dzkri.ardfi@gmail.com",
          vaksin: 3,
          jenis: "Pfizer",
          sesi: 1,
          tanggal: "31 Juni 2022",
          tempat: "Jakarta",
          lokasi: "Rumah Sakit Brimob",
          antrian: "778-852",
          status: [
            1,2
          ]


        },
         {
          nama: "RS. Umum",
          nik: "1971052106012106010002",
          tmpt: "Pangkalpinang",
          tgl: "21 Juni 2001",
          alamat: "Kota Pangkalpinang",
          hp: "081279979676",
          email: "dzkri.ardfi@gmail.com",
          vaksin: 3,
          jenis: "Pfizer",
          sesi: 1,
          tanggal: "31 Juni 2022",
          tempat: "Jakarta",
          lokasi: "Rumah Sakit Brimob",
          antrian: "778-852",
          status: [
            1,2
          ]


        },
         {
          nama: "RS. Umum",
          nik: "1971052106012106010002",
          tmpt: "Pangkalpinang",
          tgl: "21 Juni 2001",
          alamat: "Kota Pangkalpinang",
          hp: "081279979676",
          email: "dzkri.ardfi@gmail.com",
          vaksin: 3,
          jenis: "Pfizer",
          sesi: 1,
          tanggal: "31 Juni 2022",
          tempat: "Jakarta",
          lokasi: "Rumah Sakit Brimob",
          antrian: "778-852",
          status: [
            1,2
          ]


        },
         {
          nama: "RS. Umum",
          nik: "1971052106012106010002",
          tmpt: "Pangkalpinang",
          tgl: "21 Juni 2001",
          alamat: "Kota Pangkalpinang",
          hp: "081279979676",
          email: "dzkri.ardfi@gmail.com",
          vaksin: 3,
          jenis: "Pfizer",
          sesi: 1,
          tanggal: "31 Juni 2022",
          tempat: "Jakarta",
          lokasi: "Rumah Sakit Brimob",
          antrian: "778-852",
          status: [
            1,2
          ]


        },

        
      ],
    };
  },
};
</script>
<style></style>
