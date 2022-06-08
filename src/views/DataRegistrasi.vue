<template>
  <v-main>
    <v-toolbar class="toolbar round-lg" elevation="3" color="light-blue lighten-5"> 
      <h2> Data Registrasi Vaksinasi </h2>
    </v-toolbar>
    <v-container>
      <v-row class="justify-space-between">
    <div class="d-flex">
  <p class="my-1 mx-2"> Fitur </p> 
  <v-btn small outlined color="primary"> semua <v-icon color="black" size="15"> mdi-arrow-down </v-icon> </v-btn>
    </div> 
    <v-form> 
      <v-col
      cols="12"
      >

    <v-text-field solo placeholder=" Masukkan hal yang dicari" >  
      
    </v-text-field>
      </v-col>
    </v-form>
    </v-row>

    </v-container>
  </v-main>
</template>

<script>

  export default {
    name: 'DataRegistrasi',
  }
</script>

<style>
 .toolbar {
   margin-bottom: 15px;
 }
</style>