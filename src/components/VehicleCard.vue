<template>
    <div id="addVehicle">
<div id="vehicleCard1">
  <div id="vLoop"
    v-for="vehicle in results"
    :key="vehicle.id"
  >
  <div id="vehicle">
  <b-card id="bCard"
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
  <div id="vdetails">
    <h1>Vehicle Details</h1>
    <h5> Make: {{ vehicle.make  }} </h5>
    <h5> Model: {{ vehicle.model }} </h5>
    <h5> Tax Renewal Date: {{ vehicle.taxDate }} </h5>
    <h5> Insurance Renewal Date: {{ vehicle.insuranceDate }} </h5>
    <h5> MOT Renewal Date: {{ vehicle.motDate }} </h5>
</div>
    <div id="vehicleButtons">
    <b-button @click="storeVehicleId(vehicle.id)" variant="primary">View Issues</b-button>
    <b-button @click="editVehicle(vehicle.id)" variant="primary">Edit Vehicle</b-button>
    <b-button @click="deleteVehicle(vehicle.id)"  variant="primary">Delete Vehicle</b-button>
    <!-- <b-modal ref="my-modal" hide-footer title="Delete Vehicle">
        
      <div class="d-block text-center">
        <h3>Are you sure you would like to delete this vehicle?</h3>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">No</b-button>
      <b-button class="mt-2" variant="outline-warning" block @click="deleteModal">Yes, delete</b-button>
    </b-modal> -->
    </div>
  </b-card>

  </div>
  </div>
  </div>
  <div id="noVehicles" v-if="results === null">
    <h2>Welcome {{ this.$store.getters.userName }}</h2>
    <h3>Add a vehicle and it will appear here</h3>
  </div>
  <b-button @click="addVehicle()" variant="primary">Add Vehicle</b-button>
    </div>


</template>


<script>
import { EventBus } from "../eventBus/event-bus.js";  
import axios from 'axios';
const url = "http://3.8.223.175:8181/VehicleManagement/get/";
const deleteUrl = "http://3.8.223.175:8181/VehicleManagement/vehicle/";
// const url = "http://localhost:8081/get/";
// const deleteUrl = "http://localhost:8081/vehicle/";

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
// axios.get(url + 1).then(response => {
            this.results = response.data.vehicles

          // })
        // this.getVehicles()
      });   
    },
    mounted() {
    
    },
    methods: {
       showModal() {
         this.$refs['my-modal'].show();
        this.$store.commit('vehicleSet', this.id) 
        // this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide();
      },
      deleteModal() {
        this.deleteVehicle(this.$store.getters.vehicleId)
        this.$refs['my-modal'].hide();
        this.getVehicles();
      },
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
        // console.log('v' +vehicleId)
        this.$store.commit('vehicleSet', vehicleId)
        // console.log(this.$store.getters.vehicleId)
        // console.log()
      },
      storeVehicleId(vehicleId) {
          this.$store.commit('vehicleSet', vehicleId)
          // console.log('vid' + this.$store.getters.vehicleId)
          this.$router.replace(this.$route.query.redirect || '/VehicleManagement/issue')
          // this.$router.replace(this.$route.query.redirect || '/issue')
            // console.log('emit'+this.id)
            // EventBus.$emit("user-id", this.id);
        },
        editVehicle(vehicleId) {
          this.$store.commit('vehicleSet', vehicleId)
          this.$router.replace(this.$route.query.redirect || '/VehicleManagement/editVehicle')
          // this.$router.replace(this.$route.query.redirect || '/editVehicle')
        },
        addVehicle() {
          this.$router.replace(this.$route.query.redirect || '/VehicleManagement/addVehicle')
        }
    }
}
</script>