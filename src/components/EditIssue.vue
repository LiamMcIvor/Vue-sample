<template>
    <div id="vehicleCard">
        <h1 class="title">Edit Issue</h1>
            <v-form class="form" v-model="isValid">
            <!-- <div 
    v-for="issue in results"
    :key="issue"
  >
            <div class="form-group">
                <label class="form-label" for="name">Issue Name</label>
                <input v-model="$v.form.issueName.$model" type="text" :placeholder="issue.issueName" class="form-control" id="name">
                <div v-if="$v.form.name.$error" class="error">first name is required</div> 
            </div>

            
            <div class="form-group">
                <b-form-select v-model="form.urgency" :options="options"></b-form-select>
            </div> -->

              <v-text-field
                v-model="form.make"
                 label="Issue Name"
                :placeholder="form.issueName"
                :rules="[rules.required, rules.min, rules.letters]"
              ></v-text-field>

              <div class="form-group">
                <b-form-select v-model="form.urgency" :options="options"></b-form-select>
            </div>
              <!-- <v-text-field
                v-model="form.urgency"
                 label="Urgency"
                :placeholder="results.urgency"
                :rules="[rules.required]"
              ></v-text-field> -->
            
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
              v-model="form.lastAddressed"
              label="Last Addressed"
              readonly
              v-on="on"
                 >
            </v-text-field>
          </template>
          <v-date-picker v-model="form.lastAddressed" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(form.lastAddressed)">OK</v-btn>
          </v-date-picker>
        </v-menu>
 <!-- </div> -->
           </v-form>
              <b-button
        variant="outline-primary"
          @click="postPost()"
          :disabled="!isValid"
        class="btn"
      >submit</b-button>
    </div>
   
</template>

<script>
 import {required} from 'vuelidate/lib/validators';
 import axios from 'axios';
 import { EventBus } from "../eventBus/event-bus.js"; 
// const url = "http://3.8.223.175:8181/VehicleManagement/getIssue/";
//  const updateUrl = "http://3.8.223.175:8181/VehicleManagement/updateIssue/";
const url = "http://localhost:8081/getIssue/";
 const updateUrl = "http://localhost:8081/updateIssue/";

export default {
    name: 'EditIssue',
    data() {
        return {
          rules:  {
                  required: value => !!value || 'Required.',
                  min: v => v.length >= 3 || 'Min 3 characters', 
                  letters: v => /^[A-Za-z]+$/.test(v) || 'Can only contain letters'
                 }, 
            isValid: true,
            results: null,
            form: {
                issueName: null,
                urgency: null,
                lastAddressed: new Date().toISOString().substr(0, 10)
            },
             menu: false,
             options: [
          { value: null, text: 'Please select an option '  },
          { value: '1', text: 'Daily' },
          { value: '7', text: 'Weekly' },
          { value: '14', text: 'Bi-Weekly' },
          { value: '30', text: 'Monthly' },
          { value: '182', text: 'Semi-Annualy' },
          { value: '365', text: 'Annualy' }
        ]
        }
    },
    created() {
      EventBus.$on("clicked-issue", issueId=> {  
      console.log(issueId)
      this.getIssue(url + issueId);
      });
    },
    mounted() {
          // axios.get(url).then(response => {
          //   this.results = response.data
          //   // eslint-disable-next-line no-console
          //   console.log(response.data)
          // })
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
          // if(!this.rules.validate()){
            console.log(this.$store.getters.issueId)
          axios.patch(updateUrl + this.$store.getters.issueId, this.form)
          .then(response => {
            // eslint-disable-next-line no-console
            console.log('patch' + response)
            // this.$router.replace(this.$route.query.redirect || '/VehicleManagement/issue')
           })
          .catch(e => {
          this.errors.push(e)
          })
          // this.$router.replace(this.$route.query.redirect || '/VehicleManagement/issue')
          this.$router.replace(this.$route.query.redirect || '/issue')
        },
        getIssue(url) {
            // eslint-disable-next-line no-console
            // console.log(this.form.id)
             axios.get(url).then(response => {
            this.results = response.data
            // eslint-disable-next-line no-console
            console.log('123' + response)
          })
        }
      } 
}
</script>

<style scoped>

</style>