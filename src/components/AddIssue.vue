<template>
    <div id="vehicleCard">
        <h1 class="title">Add an Issue</h1>
            <form class="form">

            <div class="form-group">
                <label class="form-label" for="name">Issue Name</label>
                <input v-model="$v.form.issueName.$model" type="text" placeholder="Name" class="form-control" id="name">
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

            </form>
              <button
        @click="postPost()"
        class="btn"
      >submit</button>
    </div>
</template>

<script>
// import { EventBus } from "../eventBus/event-bus.js";  
 import {required} from 'vuelidate/lib/validators';
 import axios from 'axios';
 const url = "http://localhost:8081/issue";

export default {
    name: 'AddIssue',
    data() {
        return {
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
      // setIssueId: function(issueId){
      //   // eslint-disable-next-line no-console
      //       console.log(issueId)
      //       EventBus.$emit("clicked-event", issueId);
      //   return issueId;
      // },
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