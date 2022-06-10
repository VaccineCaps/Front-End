<template>
<v-app style="background: linear-gradient(#FFFFFF, #CDF0FF);">
    <h1 style="background-color:#E4F7FF; height:50px; border-radius:15px; padding-left: 20px;">Pembuatan Sesi Vaksinasi</h1>
    <v-container style="margin-top:20px;">

<!-- Tambah Sesi Baru -->
        <div style="border:dashed 3px; padding: 10px; height: 50px;">
            
            <v-row >
            <div>
        
                <v-icon icons
                x-large>
                    mdi-plus
                </v-icon>
            </div>
                <div>
                
                    <h2> Buat Sesi baru</h2>
                </div>
           </v-row>
        </div>
        <br />
        <br />

<!-- Button -->
    <h2>Sesi Vaksinasi Yang Tersedia</h2>

        <br />

    <v-row style="height: 80px;">
        <div>
            <h3>Filter</h3>
        </div>

        <div>
            <h3 style="margin-left:20px;">
                Semua</h3>
        </div>

        <div>
            <v-text-field style="margin-left:700px;"
        hide-details
        single-line
        prepend-icon="mdi-magnify"
            ></v-text-field>
        </div>

<!-- List Sesi Vaksinasi -->
    </v-row>

        <v-card v-for="n in 3" :key="n" style="border: solid #1789BC; margin-top: 15px; border-radius:10px; padding:10px;">
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

</style>