<template>
  <div id="vehicleCard">
   <h1 class="title">Create Account</h1>
 
    <h2 class="subtitle">
      Create an account or log in to manage your vehicles
    </h2> 

  <form class="form">

      <div class="form-group">
        <label class="form-label" for="name">First Name</label>
        <input v-model="$v.form.firstName.$model" type="text" placeholder="Name" class="form-control" id="name">
        <!-- <div v-if="$v.form.name.$error" class="error">first name is required</div> -->
      </div>

      <div class="form-group">
        <label class="form-label" for="name">Surname</label>
        <input v-model="$v.form.surname.$model" type="text" placeholder="Name" class="form-control" id="name">
        <!-- <div v-if="$v.form.name.$error" class="error">surname is required</div> -->
      </div>

      <div class="form-group">
        <label class="form-label" for="email">Email</label>
        <input type="text" v-model="$v.form.email.$model" placeholder="your@email.com" class="form-control" id="email">
        <!-- <div v-if="$v.form.email.$error && !$v.form.email.required" class="error">email is required</div>
        <div v-if="$v.form.email.$error && !$v.form.email.email" class="error">email is invalid</div> -->
      </div>


      <div class="form-group">
        <label class="form-label" for="password">Password</label>
        <input v-model="$v.form.password.$model" type="password" placeholder="Password" class="form-control" id="password">
        <!-- <div v-if="$v.form.password.$error && !$v.form.password.required" class="error">password is required</div> -->
      </div>

       <div class="form-group">
        <label class="form-label" for="password">Re-enter Password</label>
        <input v-model="$v.form.passwordConf.$model" type="password" placeholder="Password" class="form-control" id="password">
        <!-- <div v-if="$v.form.password.$error && !$v.form.password.required" class="error">re-enter password</div> -->
      </div>

       <div class="form-group"> 
        <label class="form-label" for="postcode">Postcode</label>
        <input v-model="form.postcode" type="text" placeholder="Postcode" class="form-control" id="postcode">
        <!-- <div v-if="$v.form.postcode.$error" class="error">postcode is required</div> -->
      </div>
    </form>
    <button
        @click="postPost()"
        class="btn"
      >submit</button>
  </div> 

</template>

<script>
    import axios from 'axios';
    const url = "http://localhost:8081/user";

  import {required, email} from 'vuelidate/lib/validators';
  export default {
    name: 'Register',
    data () {
      return {
        form: {
          email: null,
          password: null,
          passwordConf: null,
          firstName: null,
          surname: null,
          postcode: null
        }
      }
    },
    validations: {
      form: {
        email: {
          required,
          email
        },
        password: {
          required
        },
        passwordConf: {
          required
        },
        firstName: {
          required
        },
        surname: {
          required
        },
        postcode: {
          required
        }
      }
    },
    methods: {
        postPost() {
    axios.post(url, this.form)
    .then(response => {
            // eslint-disable-next-line no-console
            console.log(response)
    })
    .catch(e => {
      this.errors.push(e)
    })
    }
    }
  }
</script>

<style>
</style>