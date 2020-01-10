<template>
    <div id="vehicleCard">
        <h1 class="title">Edit Issue</h1>
            <form class="form">
            <div 
    v-for="issue in results"
    :key="issue"
  >
            <div class="form-group">
                <label class="form-label" for="name">Issue Name</label>
                <input v-model="$v.form.issueName.$model" type="text" :placeholder="issue.issueName" class="form-control" id="name">
                <!-- <div v-if="$v.form.name.$error" class="error">first name is required</div> -->
            </div>

            
            <div class="form-group">
                <b-form-select v-model="form.urgency" :options="options"></b-form-select>
            </div>

            
             <v-menu
                 ref="menu"
                 v-model="menu"
                 :close-on-content-click="false"
                 :return-value.sync="form.lastAddressed"
                 transition="scale-transition"
                 offset-y
                 min-width="290px"
             >
              <template v-slot:activator="{ on }">
              <v-text-field
              v-model="issue.lastAddressed"
              label="Last Addressed"
              readonly
              v-on="on"
                 >
            </v-text-field>
          </template>
          <v-date-picker v-model="issue.lastAddressed" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.menu[0].save(issue.lastAddressed)">OK</v-btn>
          </v-date-picker>
        </v-menu>
 </div>
            </form>
            
              <button
        @click="postPost()"
        class="btn"
      >submit</button>
    </div>
   
</template>

<script>
 import {required} from 'vuelidate/lib/validators';
 import axios from 'axios';
 const url = "http://localhost:8081/issue";

export default {
    name: 'EditIssue',
    data() {
        return {
            results: null,
            form: {
                issueName: null,
                urgency: null,
                lastAddressed: new Date().toISOString().substr(0, 10)
            },
             menu: false,
             options: [
          { value: null, text: 'Please select an option' },
          { value: '1', text: 'Daily' },
          { value: '7', text: 'Weekly' },
          { value: '14', text: 'Bi-Weekly' },
          { value: '30', text: 'Monthly' },
          { value: '182', text: 'Semi-Annualy' },
          { value: '365', text: 'Annualy' }
        ]
        }
    },
    mounted() {
          axios.get(url).then(response => {
            this.results = response.data
            // eslint-disable-next-line no-console
            console.log(response.data)
          })
    },
     validations: {
      form: {
        issueName: {
          required
        },
        selected: {
          required
        },
        lastAddressed: {
          required
        },
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

<style scoped>

</style>