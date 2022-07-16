<template>
  <div class="home">
    <div class="jumbotron text-center">
      <h2>Autentikasi Vue.js dengan JWT Lumen</h2>
      <p>Anda Berada di {{ currentRouteName }}</p>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-4 offset-md-4">
          <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/backend">Backend</router-link>
          </div>
          <div class="card">
            <div class="card-body">
              <h4 class="card-title text-center">Sign in</h4>
              <hr />
              <form @submit.prevent="onSubmit()">
                <div class="form-group">
                  <label for="email">email</label>
                  <input type="text" class="form-control" v-model="email" />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="text" class="form-control" v-model="password" />
                </div>
                <div class="row">
                  <div class="col">
                    <div class="float-right">
                      <button type="submit" class="btn btn-primary">
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "TesLoginPge",
  components: {},
  data() {
    return {
      email: "",
      password: "",
      currentRouteName: "",
    };
  },
  created() {
    this.currentRouteName = this.$route.name;
  },
  methods: {
    gtO() {
      this.$router.push("/test-api");
    },
    // async onSubmit() {
    //   if (this.email.trim() && this.password.trim()) {
    //     let formData = new FormData();
    //     formData.append("email", this.email.trim());
    //     formData.append("password", this.password);
    //     const response = await axios.post('/login', this.email, this.password,{
    //         headers:{
    //             "Content-Type": "multipa-rt/form-data"
    //         },
    //         data: formData

    //     })
    //     console.log(response)
    //     const token = response.data.token;
    //     if (token) {
    //           this.$router.push({
    //             name: "ApiLogin",
    //             params: {
    //               token: token
    //             }
    //           });
    //         }

    //     // const options = {
    //     //   url: "/login",
    //     //   method: "post",
    //     //   headers: {
    //     //     "Content-Type": "multipart/form-data"
    //     //   },
    //     //   data: formData
    //     // };

    //     // axios(options)
    //     //  .then(response => {
    //     //     const token = response.data.token;

    //     //     if (token) {
    //     //       this.$router.push({
    //     //         name: "ApiLogin",
    //     //         params: {
    //     //           token: token
    //     //         }
    //     //       });
    //     //     }
    //     //   })
    //     //   .catch(e => {
    //     //     alert(e + "\n" + "email / password yang dimasukkan salah.");
    //     //   });
    //   }
    // }
  },
};
</script>
