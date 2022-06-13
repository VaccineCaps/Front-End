<template>
  <v-main>
    <v-app-bar id="bar" class="rounded-b-xl" elevation="3">
      <h2 class="white--text font-weight-medium">Stok Vaksin</h2>
    </v-app-bar>
    <v-container fluid>
      <div class="mx-10">
        <h1 class="font-weight-regular">Registrasi Vaksin Keluar</h1>
        <p>Silahkan mengisi data-data yang tercantum dibawah ini :</p>

        <v-row>
          <v-col cols="5">
            <body>
              Nama Rumah Sakit
            </body>
            <v-text-field
              solo
              label="Masukkan Nama Rumah Sakit"
              class="fields"
            ></v-text-field>
            <body>
              Nomor Transaksi
            </body>
            <v-text-field
              solo
              label="Masukkan Nomor Transaksi"
              class="fields"
            ></v-text-field>
            <body>
              Tanggal Pengiriman
            </body>
            <v-text-field
              solo
              label="Masukkan Tanggal Pengiriman"
              class="fields"
            ></v-text-field>
            <body>
              Distributor
            </body>
            <v-text-field
              solo
              label="Masukkan Distributor"
              class="fields"
            ></v-text-field>
            <body>
              Email
            </body>
            <v-text-field
              solo
              label="Masukkan Email"
              class="fields"
            ></v-text-field>
          </v-col>
          <v-col></v-col>
          <v-col cols="5">
            <body>
              Jenis Vaksin
            </body>
            <v-text-field
              solo
              label="Masukkan Jenis Vaksin"
              class="fields"
            ></v-text-field>
            <body>
              Jumlah
            </body>
            <v-text-field
              solo
              label="Masukkan Jumlah Vaksin"
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
export default {};
</script>

<style>
p {
  color: rgba(0, 0, 0, 0.493);
}
.fields {
  border-radius: 10px;
}
</style>
