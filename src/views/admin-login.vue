<template>
<v-container class="container" fluid>
  <v-row>
    <!-- login -->
      <v-col 
      cols="6">
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
            </v-col>     
          </v-row> 

          <v-row>
            <v-col cols="12" sm=6 class="mx-auto">
              <v-btn class="rounded-lg" large color="light-blue lighten-3" block>Login</v-btn> 
              <v-row class="my-5">
                <v-col cols="5" class="my-3"><hr></v-col>
                <v-col cols="2"> <h4 class="text-center">atau</h4> </v-col>
                <v-col cols="5" class="my-3"><hr></v-col>
              </v-row>
               
              <v-btn class="rounded-lg" large color="primary" block> <v-icon class="mx-3">mdi-facebook</v-icon> Log In With Facebook</v-btn> <br>
              <v-btn class="rounded-lg" style="margin-bottom: 3px;"  large color="transparent" block elevation="5"> 
                <v-icon color="red" class="mx-3">mdi-google</v-icon> Log In With Google </v-btn> <br>
                <body-2 class="text-center">Tidak Memiliki akun? <span style="color: rgb(0, 60, 255);  ">Registrasi Sekarang</span></body-2>
            </v-col>
          </v-row> 
      </v-col>

    <!-- Picture -->
      <v-col cols="6" class="background">
      </v-col>
  </v-row>
</v-container>
</template>

<script>
export default {
    name: 'AdminLogin',
    
    data (){
      return {
          show1: false,
          password: '',
      }
    }
}
</script>

<style>
  
</style>