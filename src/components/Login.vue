<template>
  <div class="login-wrapper border border-light">
    <form class="form-signin" @submit.prevent="login">
      <h2 class="form-signin-heading">Please sign in</h2>
      <div class="alert alert-danger" v-if="error">{{ error }}</div>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      <button class="btn btn-lg btn-primary btn-block" type="submit" @click="emitUserId()">Sign in</button>
      <button class="btn btn-lg btn-primary btn-block" type="submit" @click="register()">Register</button>
    </form>
  </div>
</template>

<script>
// import { EventBus } from "../eventBus/event-bus.js";  
// import axios from 'axios';
// const url = "http://localhost:8081/user/";
export default {
    
  name: 'Login',
  data () {
    return {
        id: null,
      email: '',
      password: '',
      userName: null,
      error: false
    }
  },
  methods: {
    login () {
        this.axios.get('user')
        // axios.get(url)
        .then(response => {
            console.log(response)
            response.data.forEach(user => {
                if (user.email === this.email && user.password === this.password){
                    this.id = user.id
                    this.userName = user.firstName
                    // console.log(this.id)
                    // this.loginSuccessful(this.id)
                    this.$store.commit('setAuthenticated', true);
                    this.$store.commit('setUserName', this.userName);
                    this.$router.replace(this.$route.query.redirect || '/VehicleManagement/vehicleCard')
                    // this.$router.replace(this.$route.query.redirect || '/vehicleCard')
                    // this.setUserId()
                    this.emitUserId(this.id)

                }
                else {
                    this.loginFailed()
                }
            })
        })
        // .then(response => this.loginSuccessful(response))
        // .catch(() => this.loginFailed())
        //  console.log(this.email)
        //  console.log(this.password)
    },
    loginSuccessful () {
        // console.log('login')
        // if (!req.data.token) {
        //     this.loginFailed()
        //     return
        // }

        // localStorage.token = req.data.token
        // this.error = false

        // this.$router.replace(this.$route.query.redirect || '/issue')
        // EventBus.$emit("loggedIn", this.id);
        },
        loginFailed () {
        this.error = 'Login failed!'
        delete localStorage.token
        },
        emitUserId() {
          this.$store.commit('change', this.id)
          console.log(this.$store.getters.id)
            // console.log('emit'+this.id)
            // EventBus.$emit("user-id", this.id);
        },
        register() {
          this.$router.replace(this.$route.query.redirect || '/VehicleManagement/signUp')
          // this.$router.replace(this.$route.query.redirect || '/signUp')
        }
  }
}
</script>

<style lang="css">
body {
  background: #605B56;
}

.login-wrapper {
  background: #fff;
  width: 70%;
  margin: 12% auto;
}

.form-signin {
  max-width: 330px;
  padding: 10% 15px;
  margin: 0 auto;
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>