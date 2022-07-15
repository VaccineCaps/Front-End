<template>
<v-app>
    <v-navigation-drawer
      permanent
      left
      color="#1789BC"
      style="color:white;"
      fixed
      v-model="drawer"
      :clipped="clipped"
      
    >
      
      <template v-slot:prepend>
        <v-cols cols="12" class="text-center">
          <v-list-item style="background-color:white; border-radius:5px; margin-top:0px; width: 200px; text-align:" class="mx-5">
        <v-list-item-icon>
          <img src="../../assets/Loading PC.png" style="width:40px; background-position: center;">
      </v-list-item-icon>
      <v-list-item-title><h1 style="color:#1789BC;">I-Vaksin</h1></v-list-item-title>
      </v-list-item>
      <br/>
       <v-list-item two-line>
        <v-list-item-avatar style="margin-left:90px;">
            <img src="../../assets/logo.png">
        </v-list-item-avatar>
        </v-list-item>
        <v-list-item-content>
        <v-list-item-title>Dzikri</v-list-item-title>
        <v-list-item-subtitle>Super Admin</v-list-item-subtitle>
        </v-list-item-content>
        </v-cols>
        
      </template>

      <br/>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.path"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title style="color:white">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <br/>
      <br/>
      <br/>
      <br/>
      
      
      
       <v-list dense>
        <v-list-item
          v-for="gmbr in gmbrs"
          :key="gmbr.title"
          
        >
          <v-list-item-icon>
            <v-icon>{{ gmbr.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title style="color:white">{{ gmbr.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      
      
    </v-navigation-drawer>
</v-app>
  
</template>

<script>
export default {
    name:"sideBar",
    data () {
      return {
        clipped: false,
      drawer: false,
      fixed: false,
        items: [
          { title: 'Pendaftaran Vaksin', icon: 'mdi-clipboard-outline',path:'/' },
          { title: 'Sesi Vaksinasi', icon: 'mdi-pencil-box', path:'/sessions' },
          { title: 'Stok Vaksin', icon: 'mdi-archive', path:'/stok-vaksin' },
          { title: 'Media & Artikel', icon: 'mdi-newspaper', path:'/media-dan-artikel' },
        ],
        gmbrs:[
          {title: 'Log-out', icon: 'mdi-logout'},
        ],
      }
    },
}
</script>