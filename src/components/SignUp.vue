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
         v-model="placeholder" label="Street Name"
         :rules="[rules.required]"
        ></v-text-field>
        <v-text-field
         v-model="placeholder" label="House Number"
         :rules="[rules.required]"
         :type="'number'"
        ></v-text-field>
        <v-text-field
         v-model="placeholder" label="Postcode"
         :rules="[rules.required, rules.pattern]"
        ></v-text-field>
        <v-text-field
         v-model="placeholder" label="City"
         :rules="[rules.required]"
        ></v-text-field>
        <v-text-field 
          v-model="placeholder" label="Country"
          :rules="[rules.required]"
        ></v-text-field>
        <v-text-field 
          v-model="placeholder" label="E-mail Address"
          :rules="[rules.required]"
        ></v-text-field>
        <v-text-field 
          v-model="placeholder" label="Confirm E-mail"
          :rules="[rules.required]"  
        ></v-text-field>
        <v-text-field 
          v-model="password" label="Password"
          :rules="[rules.required, rules.min]"
        ></v-text-field>
        <v-text-field 
          v-model="placeholder" label="Confirm Password"
          :rules="[rules.required, rules.min]"
        ></v-text-field>
        <b-button href="#" variant="outline-primary">Submit</b-button>
    </div>
    
</template>

<script>
export default {
    data () {
      return {
        // pattern: {
        //   pattern: '/^[a-z]{2}\d{1,2}\s*\d[a-z]{2}$/i'
        // },
        rules:  {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters', 
          message:'One lowercase letter required.',
          // pattern:"/^[a-z]{2}\d{1,2}\s*\d[a-z]{2}$/i"
        }
      }
    },
    name: 'SignUp'
}

</script>