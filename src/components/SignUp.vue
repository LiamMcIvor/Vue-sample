<template>
    <div id="signUpForm" >
        <v-form v-model="isValid">
        <v-text-field
         v-model="form.firstName" label="First Name"
         :rules="[rules.required]"
         @change='checkEmpty($event, "name")'
         :type="'String'"
        ></v-text-field>
        <v-text-field
         v-model="form.surname" label="Surname"
         :rules="[rules.required]"
        ></v-text-field>
        <v-text-field
         v-model="form.postcode" label="Postcode"
         :rules="[rules.required]"
        ></v-text-field>
        <v-text-field 
          v-model="form.email" label="E-mail Address"
          :rules="[rules.required, rules.email]"
        ></v-text-field>
        <v-text-field 
          v-model="form.cEmail" label="Confirm E-mail"
          :rules="[rules.required, rules.email, emailConfirmationRule]"  
        ></v-text-field>
        <v-text-field 
          v-model="form.password" label="Password"
          :rules="[rules.required]"
        ></v-text-field>
        <v-text-field 
          v-model="form.cPassword" label="Confirm Password"
          :rules="[rules.required, passwordConfirmationRule]"
        ></v-text-field>
        </v-form>
        <b-button 
          href="#" 
          variant="outline-primary"
          @click="postPost()"
          :disabled="!isValid"
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
        isValid: true,
        form: {
          email: null,
          cEmail: null,
          password: null,
          cPassword: null,
          firstName: null,
          surname: null,
          postcode: null
        },
        rules:  {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters', 
          email: v => /.+@.+/.test(v) || "E-mail must be valid",
          uppercase: v => /(?=.*[A-Z])/.test(v) || 'Must have one uppercase character', 
          oneNumber: v => /(?=.*\d)/.test(v) || 'Must have one number', 
          special: v => /([!@$%])/.test(v) || 'Must have one special character [!@#$%]'
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
            this.$router.replace(this.$route.query.redirect || '/')
          })
          .catch(e => {
          this.errors.push(e)
          })
        }
      },
      computed: {
    passwordConfirmationRule() {
      return this.form.password === this.form.cPassword || 'Passwords must match'
    },
    emailConfirmationRule() {
      return this.form.email === this.form.cEmail || 'Emails must match'
    },
}
}

</script>