<template>
  <div>
    <router-view></router-view>
    <v-navigation-drawer
    class="navSide"
    absolute
    bottom
    v-model="drawer"
    :color="color"
    
    
    :right="right"
    :permanent="permanent"
    :src="bg"
    dark
    >
        <v-list
        dense
        nav
        class="py-0"
        >
            <v-list-item two-line>
                <div>
                    <div>
                        <v-chip
      class="mx-15 my-5"
      color="white"
      label
      text-color="primary"
      x-large
      block
    >
        <v-avatar>
              <v-img src="../assets/logo.png"></v-img>
        </v-avatar>
      Tags
    </v-chip>
                    </div>
                    <div>
                        <v-list-item-avatar>
                            <v-img>mdi-clipboard-file-outline</v-img>
                        </v-list-item-avatar>
                    </div>
                    <div>
                        <v-list-item-content>
                            <v-list-item-title>Aplikasi</v-list-item-title>
                            <v-list-item-subtitle>Subtext</v-list-item-subtitle>
                        </v-list-item-content>
                    </div>
                </div>
     </v-list-item>

            <v-divider></v-divider>
            <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :to="item.path"
            >
            <v-list-item-icon>
                <v-icon>{{item.icon}}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>{{item.title}} </v-list-item-title>
            </v-list-item-content>

            </v-list-item>
        </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
    data(){
        return{
            drawer: true,
            items:[
                { title: 'Data Pendaftaran Vaksinasi', icon: 'mdi-clipboard-file-outline', path:'data-pendaftaran-vaksinasi'},
                {title: 'Stok Vaksin', icon: 'mdi-basket',path: 'stok-vaksin'},
                {title: 'Pembuatan Sesi Vaksinasi', icon:'mdi-pencil-box-multiple-outline', path:'sessions'},
                {title: 'Media dan Artikel', icon: 'mdi-folder-multiple-image', path:'media-dan-artikel'}
            ],
            color: 'primary',
            colors:[
                'primary',
                'blue',
                'success',
                'red',
                'teal'
            ],
            right: false,
            permanent: true,
            
            
        }
    }
}
</script>

<style>

    @media screen and (max-width: 600px) {
  .navSide.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
}

</style>