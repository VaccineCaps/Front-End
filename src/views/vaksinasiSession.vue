<template>
<v-app style="background: linear-gradient(#FFFFFF, #CDF0FF);">
    <h1 style="background-color:#E4F7FF; height:50px; border-radius:15px; padding-left: 20px;">Pembuatan Sesi Vaksinasi</h1>
    <v-container style="margin-top:20px;">

<!-- Tambah Sesi Baru -->
        <div id="putus">
        <v-toolbar color="transparent" elevation="0">
          <v-btn color="transparent" text icon width="100%" height="100%">
            <v-icon large color="black">mdi-plus-circle-outline</v-icon>
            <h2 class="fontss font-weight-medium mx-3">Buat Sesi Baru</h2>
          </v-btn>
        </v-toolbar>
      </div>

      <br />
    

<!-- Button -->
    <h2>Sesi Vaksinasi Yang Tersedia</h2>

        <br />

   <v-row class="justify-space-between" style="height:120px;">
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
<!-- List Sesi Vaksinasi -->
   
        <v-card v-for="n in 3" :key="n" style="border: solid #1789BC; margin-top: 0px; border-radius:10px; padding:10px;">
            <v-card-title style="background-color: #1789BC; border-radius: 15px;">Rs.Cipto Mangunkusumo</v-card-title><br />
            <v-card-actions>Lokasi</v-card-actions>
            <v-card-actions>Sesi Vaksin</v-card-actions>
            <v-card-actions>Jenis Vaksin</v-card-actions>
            <v-card-actions>Stok Vaksin</v-card-actions>

        </v-card>
    </v-container>
</v-app>
</template>

<script>
export default {
    name:"vaksinasiSessionPage",
}
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