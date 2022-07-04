<template>

<v-app style="background-color:linear-gradient(#ffffff, #cdf0ff)">
 <h1
      style="
        background-color: #e4f7ff;
        height: 50px;
        border-radius: 15px;
        padding-left: 20px;
      "
    >
      Pembuatan Sesi Vaksinasi
    </h1>

    <v-container style="margin-top:100px;">

        <v-card style="border-radius:15px; width: auto; height: 250px;" elevation="10">
            <v-container style="margin-top: 25px;">
                
                <h1 class="text-center">SELAMAT SESI VAKSIN BERHASIL DITAMBAHKAN</h1>
                <v-row>
                    <v-col>
                        <v-col cols="12" class="text-center" style="margin-top:10px;">

                            <v-btn class="text-center">Kembali</v-btn>
                        </v-col>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-container>
</v-app>
</template>

<script>
export default {
    name:"verificationPage",
}
</script>