<template>
    <div id="signUpForm">
        <v-text-field v-model="placeholder" label="First Name"></v-text-field>
        <v-text-field v-model="placeholder" label="Surname"></v-text-field>
        <v-text-field v-model="placeholder" label="Street Name"></v-text-field>
        <v-text-field v-model="placeholder" label="House Number"></v-text-field>
        <v-text-field v-model="placeholder" label="Postcode"></v-text-field>
        <v-text-field v-model="placeholder" label="City"></v-text-field>
        <v-text-field v-model="placeholder" label="Country"></v-text-field>
        <v-text-field v-model="placeholder" label="E-mail Address"></v-text-field>
        <v-text-field v-model="placeholder" label="Confirm E-mail"></v-text-field>
        <v-text-field v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              label="Normal with hint text"
              hint="At least 8 characters"
              counter
              ></v-text-field>
        <v-text-field v-model="placeholder" label="Confirm Password"></v-text-field>
        <b-button href="#" variant="outline-primary">Submit</b-button>
    </div>
    
</template>

<script>
export default {
    data () {
    return {
    //   show1: false,
    //   show2: true,
    //   show3: false,
    //   show4: false,
      password: 'Password',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => ('The email and password you entered don\'t match'),
      },
    }
  },
    name: 'SignUp'
}

</script>