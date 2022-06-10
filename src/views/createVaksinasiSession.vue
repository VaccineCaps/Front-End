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

<!-- add Sessions Page -->

    <h2>Sesi Vaksinasi Baru</h2>
    <p>Silahkan mengisi data-data yang tercantum dibawah ini.</p>
    
    <div>
        <v-card-actions>Rumah Sakit</v-card-actions>
        <v-text-field solo label="Masukkan Nama Rumah Sakit" style="border-radius:10px;"></v-text-field>
    </div>
    <div>
        <v-card-actions>Sesi</v-card-actions>
        <v-text-field solo label="Masukkan sesi" style="border-radius:10px;"></v-text-field>
    </div>
    <div>
        <v-card-actions>Tanggal</v-card-actions>
        <v-text-field solo label="Pilih Tanggal" style="border-radius:10px;"></v-text-field>
    </div>
    <div>
        <v-card-actions>Jenis Vaksin</v-card-actions>
        <v-text-field solo label="Masukkan Jenis Vaksin " style="border-radius:10px;"></v-text-field>
    </div>
    <div>
        <v-card-actions>Jumlah Vaksin</v-card-actions>
        <v-text-field solo label="Masukkan Jumlah Vaksin" style="border-radius:10px;"></v-text-field>
    </div>
    <v-row >
    <v-col class="text-center" cols="12">

        
        <v-btn  style="background: linear-gradient(#FFFFFF, #CDF0FF); color:#1789BC; border:ridge #1789BC; margin-left: 0px;">Lanjutkan</v-btn>
      
    </v-col>
    </v-row>    
    
    </v-container>
</v-app>
</template>
        
    

           

    

<script>
export default {
    name:"createVaksinasiSessionPage",
}
</script>

<style>

</style>