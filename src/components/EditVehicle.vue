<template>
    <div id="vehicleCard">
          <h1 class="title">Edit Vehicle</h1>
            <form class="form" >
            <!-- <div 
                v-for="vehicle in results"
                
                :key="vehicle.id"
                
                > -->
                
            <v-text-field
                v-model="form.make"
                 label="Make"
                :placeholder="results.make"
                :rules="[rules.required, rules.min]"
              ></v-text-field>

              <v-text-field
                v-model="form.model"
                 label="Model"
                :placeholder="results.model"
                :rules="[rules.required, rules.min]"
              ></v-text-field>
            <!-- <div class="form-group">
                <label class="form-label" for="make">Make</label>
                <input v-model="results.make" type="text" :placeholder="vehicle.make" class="form-control" id="make">
                <div v-if="$v.form.name.$error" class="error">first name is required</div> 
           </div> -->

            <!-- <div class="form-group">
                <label class="form-label" for="model">Model</label>
                <input v-model="$v.form.model.$model" type="text" :placeholder="results.model" class="form-control" id="model">
                <div v-if="$v.form.name.$error" class="error">first name is required</div> 
            </div> -->
            <!-- </div> -->
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
              :rules="[rules.required]"
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
              :rules="[rules.required]"
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
              :rules="[rules.required]"
                 >
            </v-text-field>
          </template>
          <v-date-picker v-model="form.motDate" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu2 = false">Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.menu2.save(form.motDate)">OK</v-btn>
          </v-date-picker>
        </v-menu>

             <div class="file-upload-form">
                Upload an image file for the vehicle:
                <input type="file" @change="previewImage" accept="image/*">
            </div>
            <div class="image-preview" v-if="imageData.length > 0">
                <img class="preview" :src="imageData">
            </div>
                
            <!-- </div> -->
            </form> 

            <button
               @click="postPost()"
               class="btn"
            >submit</button>
      
    </div>
</template>

<script>
// import VCalendar from 'v-calendar';
 import {required} from 'vuelidate/lib/validators';
 import axios from 'axios';
//  import VehicleCard from './VehicleCard';
 import { EventBus } from "../eventBus/event-bus.js"; 

 const url = "http://localhost:8081/getVehicle/";
 const updateUrl = "http://localhost:8081/updateVehicle/";

export default {
    name: 'EditVehicle',
    data() {
        return {
          
            results: null,
            form: {
                id: null,
                make: null,
                model: null,
                motDate: new Date().toISOString().substr(0, 10),
                insuranceDate: new Date().toISOString().substr(0, 10),
                taxDate: new Date().toISOString().substr(0, 10)
            },
                menu: false,
                menu1: false,
                menu2: false,
                imageData: "",
                 rules:  {
                  required: value => !!value || 'Required.',
                  min: v => v.length >= 8 || 'Min 3 characters', 
                 }
                
        }
    },
    created() {
      // eslint-disable-next-line no-console
              // console.log(this.results)
              EventBus.$on("clicked-event", vehicleId=> {  
    
        console.log(url)
        this.getVehicle(url + vehicleId);
      });  
       // eslint-disable-next-line no-console
              // console.log(url + vehicleId)
              
      // this.getVehicle();
    },
    mounted() {
      // EventBus.$on("clicked-event", vehicleId=> {  
      //   url + vehicleId;
      // });  
        //  this.getVehicle();
    },
    validations: {
      form: {
        make: {
          required
        },
        model: {
          required
        },
        taxDate: {
          required
        },
        motDate: {
          required
        },
        insuranceDate: {
          required
        }
      }
     },
    
     methods: {
        postPost() {
            axios.patch(updateUrl + this.results.id, this.form)
            .then(response => {
              // eslint-disable-next-line no-console
              console.log(response)
            })
            .catch(e => {
              this.errors.push(e)
            })
          },
          getVehicle(url) {
            // eslint-disable-next-line no-console
            // console.log(this.form.id)
             axios.get(url).then(response => {
            this.results = response.data
            // eslint-disable-next-line no-console
            console.log('123' + response)
          })
          },
          previewImage: function(event) {
            // Reference to the DOM input element
            var input = event.target;
            // Ensure that you have a file before attempting to read it
            if (input.files && input.files[0]) {
                // create a new FileReader to read this image and convert to base64 format
                var reader = new FileReader();
                // Define a callback function to run, when FileReader finishes its job
                reader.onload = (e) => {
                    // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                    // Read image as base64 and set to imageData
                    this.imageData = e.target.result;
                }
                // Start the reader job - read file as a data url (base64 format)
                reader.readAsDataURL(input.files[0]);
            }
        }
        },
         computed: {
       id: function() {
       
         return this.results.id
       }
  }    
}
</script>

<style scoped>

</style>