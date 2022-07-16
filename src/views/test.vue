<template>
  <v-main>
    <v-container class="mx-7">
      <p class="text-success" v-if="token">
        Halaman ini diakses DENGAN autentikasi login dan token !!
      </p>
      <!-- <v-overlay v-else
          :absolute="absolute"
          :opacity="opacity"
          :value="overlay"
        >
          <v-btn
            class="red"
            @click="overlay = false"
          >
            Lu mesti login dulu GOBLOK!
          </v-btn>
        </v-overlay> -->
      <h1>Get methods</h1>
      <v-select v-if="hospital" v-bind:items="hospital.name" v-model="rs.name">
      </v-select>
      <!-- <v-btn @click="getHospital">getHospital</v-btn> -->
      <br />
      <v-btn @click="fetchData">get</v-btn>
      <h1>Post Methods</h1>
      <v-row>
        <v-col cols="6">
          <form @submit.prevent="save">
            <v-text-field
              solo
              label="name"
              v-model="form.first_name"
            ></v-text-field>

            <v-btn type="submit"> submit </v-btn>
          </form>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import axios from "axios";

export default {
  name: "TesPagae",

  // async created(){
  //     const response = await axios.get('/hospitals')
  //     console.log(response);
  // },
  data() {
    return {
      rs: {
        name: "asd",
      },
      overlay: true,
      hospital: [],
      currentRouteName: "",
      form: {
        first_name: "",
      },
    };
  },

  async mounted() {
    const response = await axios.get("/hospitals");
    this.hospital = response.data.Hospitalss[0];
    console.log("hospital", this.hospital);
    console.log("isi RS = ", this.rs.name);
  },

  // Post
  methods: {
    redi() {
      this.$router.push("/login");
    },
  },

  // created() {
  //   this.currentRouteName = this.$route.name;
  //   const token = this.$route.params.token;

  //   if (token) {
  //     this.token = token;
  //     alert("Anda mengakses halaman Backend dengan token : " + "\n\n" + token);
  //   }
  //   // else {
  //   //     this.$router.push("/")
  //   //     alert("You Must be Login First" + "\n\n")
  //   // }
  // },
};
</script>

<style></style>
