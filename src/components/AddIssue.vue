<template>
    <div id="vehicleCard">
        <h1 class="title">Add an Issue</h1>
            <v-form class="form" v-model="isValid">

            <!-- <div class="form-group">
                <label class="form-label" for="name">Issue Name</label>
                <input v-model="$v.form.issueName.$model" type="text" placeholder="Name" class="form-control" id="name">
                <div v-if="$v.form.name.$error" class="error">first name is required</div>
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
// import { EventBus } from "../eventBus/event-bus.js";  
//  import {required} from 'vuelidate/lib/validators';
 import axios from 'axios';
//  const url = "http://3.8.223.175:8181/VehicleManagement/addIssue/";
const url = "http://localhost:8081/addIssue/";

export default {
    name: 'AddIssue',
    data() {
        return {
          isValid: true,
            form: {
                issueName: null,
                urgency: null,
                lastAddressed: new Date().toISOString().substr(0, 10)
            },
            rules:  {
                  required: value => !!value || 'Required.',
                  min: v => v.length >= 3 || 'Min 3 characters', 
                  letters: v => /^[A-Za-z]+$/.test(v) || 'Can only contain letters'
                 },
             menu: false,
             options: [
            { value: null, text: 'Please select an option' },
          { value: '1 day', text: 'Daily' },
          { value: '1 week', text: 'Weekly' },
          { value: '2 weeks', text: 'Bi-Weekly' },
          { value: '1 month', text: 'Monthly' },
          { value: '6 months', text: 'Semi-Annualy' },
          { value: '1 year', text: 'Annualy' }
        ]
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

           axios.patch(url + this.$store.getters.vehicleId, this.form)
          .then(response => {
            // eslint-disable-next-line no-console
            // this.$router.replace(this.$route.query.redirect || '/VehicleManagement/issue')
            this.$router.replace(this.$route.query.redirect || '/issue')
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