<template>
    <div id="signUpForm">
        <v-text-field
         v-model="name" label="First Name"
         :rules="[rules.required]"
         :type="'String'"
        ></v-text-field>
        <v-text-field
         v-model="placeholder" label="Surname"
         :rules="[rules.required]"
        ></v-text-field>
        <v-text-field
         v-model="placeholder" label="Postcode"
         :rules="[rules.required]"
        ></v-text-field>
        <v-text-field 
          v-model="placeholder" label="E-mail Address"
          :rules="[rules.required, rules.email]"
        ></v-text-field>
        <v-text-field 
          v-model="placeholder" label="Confirm E-mail"
          :rules="[rules.required, rules.email]"  
        ></v-text-field>
        <v-text-field 
          v-model="password" label="Password"
          :rules="[rules.required, rules.min]"
        ></v-text-field>
        <v-text-field 
          v-model="placeholder" label="Confirm Password"
          :rules="[rules.required, rules.min]"
        ></v-text-field>
        <b-button 
          href="#" 
          variant="outline-primary"
          @click="postPost()"
          class="btn"
        >Submit</b-button>
    </div>
    
</template>

<script>
import axios from 'axios';
const url = "http://localhost:8081/user";

export default {
    data () {
      return {
        rules:  {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters', 
          message:'One lowercase letter required.',
          email: v => /.+@.+/.test(v) || "E-mail must be valid"
        }
      }
    },
    name: 'SignUp',
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