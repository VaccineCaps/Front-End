<template>
    <v-main class="main">
        <v-app-bar id="bar" class="rounded-b-xl" elevation="3">
      <h2 class="white--text font-weight-medium">Menu Banner Iklan</h2>
    </v-app-bar>
    
    <v-card class="rounded-xl ma-10 pa-10" color="#F1FDFF" elevation="3" height="850">

        <v-layout row wrap justify-space-around>
            <v-flex xs12 md12 lg5>
                <v-card flat color="transparent">
                    <v-title class="text-center"><h1>PREVIEW</h1></v-title>
                    <v-img :src="outputImage" height="300" contain class="grey "></v-img>
                </v-card>
            </v-flex>

            <v-flex xs12 md12 lg5>
                <v-card flat color="transparent">
                    <h1>
                        <br>
                    </h1>
                    <v-file-input 
                    height="300"
                    v-model="image" 
                    accept=".png, .jpeg, .jpg" 
                    hint="File extentions (.png, .jpg, .jpeg) File Size limits (max: 10mb)"
                    placeholder ="Upload profile image"
                    prepend-icon=""
                    outlined
                    filled
                    >
                </v-file-input>
                </v-card>
                
            </v-flex>
        </v-layout>
        <v-btn @click="uploadImage"></v-btn>
        </v-card>
        
    </v-main>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return{
            outputImage:"",
            
                image: "",    
            
            
        }
    },

    
    methods: {
        async uploadImage(){
            const response = await axios.post('/advertise', this.image)
            this.outputImage = response
             console.log(response)
        }
        },
    
}
</script>



<style>
#putus {
  border-style: dashed;
  border-width: 2px;
  border-color: rgba(99, 99, 99, 0.801);
  border-radius: 15px;
}

/* .main {
  background: linear-gradient(180deg, #ffffff 14.37%, #e3f5fd 100%);
} */
.fontss {
  color: rgb(27, 27, 27);
}
#bar {
  background-color: rgba(34, 155, 216, 1);
}
</style>

