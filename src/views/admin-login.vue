<template>
<v-main>
<v-container class="container" fluid>
  <v-row class="row">
    <!-- login -->
      <v-col 
      cols="6" class="my-15">
          <h1 class="my-5 text-center">Masuk Admin</h1>
          <v-row>
            <v-col cols="12" sm=8 class="mx-auto">
              <v-text-field
                label="Email"
                prepend-icon="mdi-gmail"
              ></v-text-field>
              <v-text-field
                label="Password"
                prepend-icon="mdi-lock"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                @click:append="show1 = !show1"
              ></v-text-field> <br>
              <h3 class="text-center">Lupa Password?</h3>
              <v-btn 
                class="rounded-lg my-10" 
                elevation="1" 
                large 
                outlined 
                color="primary"
                block>
                Login
              </v-btn> 
            </v-col>     
          </v-row> 
      </v-col>

      <!-- overlay -->
      <v-overlay
        :z-index="zIndex"
        :value="overlay"
        :opacity="opacity">    
        <v-card height="500" width="450" color="white" class="rounded-xl">
              <v-card height="auto" elevation="10" color="white">
                  <v-card-subtitle class="primary--text">
                    <h3 class="text-center"> Syarat Penggunaan dan Kebijakan Privasi </h3>
                   </v-card-subtitle>     
              </v-card>
             <br>
          <h2 class="primary--text mx-3">I-Vaksin telah mengeluarkan Syarat Penggunaan dan Kebijakan Privasi</h2> <br>
          <body class="black--text mx-3">
            Syarat Penggunaan dan Kebijakan Privasi adalah sebuah ketentuan yang wajib dikuti dan disetujua oleh Pengguna I-Vaksin sebelum menggunakan aplikasi I-Vaksin
          </body> <br>
          <body class="black--text mx-3">
            Lihat Syarat Penggunaan dan kebijakan Privasi disini:
          </body> <br>
          <v-row>
            <v-col></v-col>
            <v-col cols="10">
              <v-btn color="primary" block>Syarat Pengunaan</v-btn> <br>
              <v-btn color="primary" block>Kebijakan Privasi</v-btn>
            </v-col>
            <v-col></v-col>
            
          </v-row>
          
        </v-card>
      </v-overlay>

    <!-- Picture -->
      <v-col cols="6" class="background">
      </v-col>
  </v-row>
</v-container>
</v-main>
</template>

<script>
export default {
    name: 'AdminLogin',
    
    data (){
      return {
          show1: false,
          password: '',
          overlay: true,
          zIndex: 0,
          opacity: 0.85,
          
      }
    }
}
</script>

<style>
  .background {
    background-image: url(../assets/Frame571.png);
    background-size: 100%;
  }
  .row {
    height: 458px; 
  }
  .row-card {
    height: 25px;
  }
</style>