<template>
  <div id="vehicleCard">
    <!-- <FormPlanPicker v-if="currentStepNumber === 1"/>
    <FormUserDetails v-if="currentStepNumber === 2"/>
    <FormAddress v-if="currentStepNumber === 3"/> -->
    <Register v-if="currentStepNumber === 1"/>

    <div class="progress-bar">
      <div :style="`width: ${progress}%;`"></div>
    </div>

    <!-- Actions -->
    <div class="buttons">
      <button
        @click="goBack"
        v-if="currentStepNumber > 1"
        class="btn-outlined"
      >Back
      </button>
      <button
        @click="postPost()"
        class="btn"
      >Next</button>
    </div>

    <pre><code>{{form}}</code></pre>
  </div>
</template>

<script>
// import FormPlanPicker from './FormPlanPicker'
// import FormUserDetails from './FormUserDetails'
// import FormAddress from './FormAddress'
import axios from 'axios';
const url = "http://localhost:8081/user";

import Register from './Register'
export default {
  name: 'RegisterWizard',
  components: {
    // FormPlanPicker,
    // FormUserDetails,
    // FormAddress,
    Register
  },
  data () {
    return {
      currentStepNumber: 1,
      length: 4,
      form: {
        email: null,
        name: null,
        password: null,
        postcode: null,
      }
    }
  },
  
  computed: {
    progress () {
      return this.currentStepNumber/this.length * 100
    }
  },
  methods: {
    goBack () {
      this.currentStepNumber--
    },
    goNext () {
      this.currentStepNumber++
    },
    postPost() {
    axios.post(url, {
      body: this.form
    })
    .then(response => {
        this.results = response.data
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