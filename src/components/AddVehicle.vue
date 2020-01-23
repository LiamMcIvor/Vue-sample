<template>
    <div id="vehicleCard">
          <h1 class="title">Add a Vehicle</h1>
            <v-form class="form" v-model="isValid">

            <!-- <div class="form-group">
                <label class="form-label" for="make">Make</label>
                <input v-model="$v.form.make.$model" type="text" placeholder="make" class="form-control" id="make">
                <div v-if="$v.form.name.$error" class="error">first name is required</div> 
            </div>

            <div class="form-group">
                <label class="form-label" for="model">Model</label>
                <input v-model="$v.form.model.$model" type="text" placeholder="model" class="form-control" id="model">
                <div v-if="$v.form.name.$error" class="error">first name is required</div>
            </div> -->

               <v-text-field
                v-model="form.make"
                 label="Make"
                :placeholder="form.make"
                :rules="[rules.required, rules.min, rules.letters]"
              ></v-text-field>

              <v-text-field
                v-model="form.model"
                 label="Model"
                :placeholder="form.model"
                :rules="[rules.required, rules.min, rules.letters]"
              ></v-text-field>
             <v-menu
                 ref="menu1"
                 v-model="menu1"
                 :close-on-content-click="false"
                 :return-value.sync="form.taxDate"
                 transition="scale-transition"
                 offset-y
                 min-width="290px"
             >
              <template v-slot:activator="{ on }">
              <v-text-field
              v-model="form.taxDate"
              label="Tax Renewal Date"
              readonly
              v-on="on"
                 >
            </v-text-field>
          </template>
          <v-date-picker v-model="form.taxDate" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu1 = false">Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.menu1.save(form.taxDate)">OK</v-btn>
          </v-date-picker>
        </v-menu>

         <v-menu
                 ref="menu"
                 v-model="menu"
                 :close-on-content-click="false"
                 :return-value.sync="form.insuranceDate"
                 transition="scale-transition"
                 offset-y
                 min-width="290px"
             >
              <template v-slot:activator="{ on }">
              <v-text-field
              v-model="form.insuranceDate"
              label="Insurance Renewal Date"
              readonly
              v-on="on"
                 >
            </v-text-field>
          </template>
          <v-date-picker v-model="form.insuranceDate" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(form.insuranceDate)">OK</v-btn>
          </v-date-picker>
        </v-menu>

         <v-menu
                 ref="menu2"
                 v-model="menu2"
                 :close-on-content-click="false"
                 :return-value.sync="form.motDate"
                 transition="scale-transition"
                 offset-y
                 min-width="290px"
             >
              <template v-slot:activator="{ on }">
              <v-text-field
              v-model="form.motDate"
              label="MOT Renewal Date"
              readonly
              v-on="on"
                 >
            </v-text-field>
          </template>
          <v-date-picker v-model="form.motDate" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu2 = false">Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.menu2.save(form.motDate)">OK</v-btn>
          </v-date-picker>
        </v-menu>
            </v-form> 

            <b-button
            variant="outline-primary"
        @click="postPost(), refresh()"

        :disabled="!isValid"
        class="btn"
      >submit</b-button>
      
    </div>
</template>

<script>
// import VCalendar from 'v-calendar';
//  import {required} from 'vuelidate/lib/validators';
 import axios from 'axios';
 const url = "http://3.8.223.175:8181/VehicleManagement/update/";
// const url = "http://localhost:8081/update/";

export default {
    name: 'AddVehicle',
    data() {
        return {
          isValid: true,
            form: {
                
                make: null,
                model: null,
                motDate: new Date().toISOString().substr(0, 10),
                insuranceDate: new Date().toISOString().substr(0, 10),
                taxDate: new Date().toISOString().substr(0, 10)
            },
                menu: false,
                menu1: false,
                menu2: false,
                rules:  {
                  required: value => !!value || 'Required.',
                  min: v => v.length >= 3 || 'Min 3 characters', 
                  letters: v => /^[A-Za-z]+$/.test(v) || 'Can only contain letters'
                 }
        }
    },
     created() {

     },
     methods: {
        postPost() {
            axios.patch(url + this.$store.getters.id, this.form)
            // axios.patch(url, this.form)
            .then(response => {
              console.log(response)
              // this.$router.replace(this.$route.query.redirect || '/VehicleManagement/vehicleCard')
            })
            .catch(e => {
              this.errors.push(e)
            })
            // this.$router.replace(this.$route.query.redirect || '/VehicleManagement/vehicleCard')
            // this.$router.replace(this.$route.query.redirect || '/vehicleCard')
            this.refresh()
          },
          refresh() {
            this.$router.replace(this.$route.query.redirect || '/VehicleManagement/vehicleCard')
          }
    }    
}
</script>

<style scoped>

</style>