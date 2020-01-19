<template>
    
<div id="vehicleCard1" v-if="renderComponent" >
  <div id="vLoop"
    v-for="vehicle in results"
    :key="vehicle.id"
  >
  <div id="vehicle">
  <b-card
    title="Vehicle Details"
    img-src="https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/19ZX1000Y_201GY3DRS1CG_A.png"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
  <div id="vdetails">
    <ul> Make: {{ vehicle.make  }} </ul>
    <ul> Model: {{ vehicle.model }} </ul>
    <ul> Tax Renewal Date: {{ vehicle.taxDate }} </ul>
    <ul> Insurance Renewaql Date: {{ vehicle.insuranceDate }} </ul>
    <ul> MOT Renewal Date: {{ vehicle.motDate }} </ul>
</div>
    <b-card-text>
      Content of vehicle
    </b-card-text>
    <v-text-field>textfield</v-text-field>
    <b-button @click="storeVehicleId(vehicle.id)" variant="primary">View Issues</b-button>
    <b-button @click="editVehicle(vehicle.id)" variant="primary">Edit Vehicle</b-button>
    <b-button @click="deleteVehicle(vehicle.id)" variant="primary">Delete Vehicle</b-button>
  </b-card>

  </div>
  </div>
  <b-button @click="addVehicle(vehicle.id)" :to="{ path: 'addVehicle'}" variant="primary">Add Vehicle</b-button>
</div>


</template>


<script>
import { EventBus } from "../eventBus/event-bus.js";  
import axios from 'axios';
const url = "http://3.8.223.175:8181/VehicleManagement/get/";
const deleteUrl = "http://3.8.223.175:8181/VehicleManagement/vehicle/";

export default {
    e1: '#vdetails',
    name: 'VehicleCard',
    data () {
      
    return {
      renderComponent: true,
      results: null,
      id: null,
    }
},
  created() {
     // eslint-disable-next-line no-console
              // console.log(this.results)
              // console.log(url)
        //       EventBus.$on("user-id", id=> {  
    
        // console.log(id)

         axios.get(url + this.$store.getters.id).then(response => {

            this.results = response.data.vehicles

          // })
        // this.getVehicles()
      });   
    },
    mounted() {
    
    },
    methods: {
      setVehicleId: function(vehicleId){
        // eslint-disable-next-line no-console
            console.log(vehicleId)
            EventBus.$emit("clicked-event", vehicleId);
        return vehicleId;
      },
      // addVehicle: function(){
      //   EventBus.$emit("clicked-add", userId);
      // },
      getVehicles: function() {
        axios.get(url + this.$store.getters.id).then(response => {
            this.results = response.data.vehicles
            console.log(response)
          })
      },
      loadVehicles(url) {
        axios.get(url).then(response => {
            this.results = response.data[0].vehicles
            // eslint-disable-next-line no-console
            console.log(response)
          })
      },
      deleteVehicle: function(vehicleId) {
        axios.delete(deleteUrl + vehicleId).then(response => {
            this.results = response.data
           this.getVehicles();
            console.log(response)
          })
      },
      setVehicle: function(vehicleId) {
        console.log('v' +vehicleId)
        this.$store.commit('vehicleSet', vehicleId)
        console.log(this.$store.getters.vehicleId)
        console.log()
      },
      storeVehicleId(vehicleId) {
          this.$store.commit('vehicleSet', vehicleId)
          console.log('vid' + this.$store.getters.vehicleId)
          this.$router.replace(this.$route.query.redirect || '/VehicleManagement/issue')
            // console.log('emit'+this.id)
            // EventBus.$emit("user-id", this.id);
        },
        editVehicle(vehicleId) {
          this.$store.commit('vehicleSet', vehicleId)
          this.$router.replace(this.$route.query.redirect || '/VehicleManagement/editVehicle')
        }
    }
}
</script>