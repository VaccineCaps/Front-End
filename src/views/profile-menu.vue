<template>
    <v-main>
        <v-toolbar class=" toolbar rounded-lg" elevation="3" color="light-blue lighten-5">
            <h2>Profile Menu</h2>
        </v-toolbar> <hr>
        <v-app-bar dark color="transparent" elevation="3" height="200">
           <div class="mx-auto">
                <v-btn
                    class="mx-5 my-3"
                    outlined
                    large
                    fab
                    color="indigo">      
                <v-avatar>
                    <v-img src="../assets/logo.png"></v-img>
                </v-avatar>
            </v-btn>
            <h3 class="black--text text-center">Super Admin</h3>
            </div>    
        </v-app-bar> <hr>
        <v-container>
            <v-card elevation="0"> 
                <v-list>
                    <template>
                    <v-list-item-group
                        color="primary">
                            <v-list-item>Daftar Super Admin</v-list-item> <hr class="line"> 
                            <v-list-item>Tentang I-Vaksin</v-list-item> <hr class="line">
                            <v-list-item>Maintenance</v-list-item> <hr class="line">
                            <v-list-item>Bahasa</v-list-item> <hr class="line"> 
                            <v-list-item>Logout</v-list-item> <hr class="line">
                    </v-list-item-group>
                    </template>
                </v-list>
            </v-card>
            
            
            
            
        </v-container>

    </v-main>
</template>

<script>
    export default {
        name: 'ProfilePage',
        data () {
      return {
        desserts: [
            {name: 'Daftar Super Admin'},
            {name: 'Tentang I-Vaksin'},
            {name: 'Maintenance'},
            {name: 'Bahasa',},
            {name: 'Logout'}, 
                ],
          
        };
                }
    }
</script>

<style>
    .toolbar{
        margin-bottom: 10px;
    }
    .line {
        border-style: ridge;
    }
</style>