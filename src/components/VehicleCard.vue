<template>
    
<div id="vehicleCard" v-if="renderComponent">
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
    <b-button :to="{ path: 'issue' }" variant="primary">View Issues</b-button>
    <b-button @click="setVehicleId(vehicle.id)" :to="{ path: 'editVehicle'}" variant="primary">Edit Vehicle</b-button>
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
const url = "http://localhost:8081/get/";
const deleteUrl = "http://localhost:8081/vehicle/";

export default {
    e1: '#vdetails',
    name: 'VehicleCard',
    props: {
      id: {
        type: String
      }
    },
    data () {
      
    return {
      renderComponent: true,
      results: null
    }
  },
  created() {
      // eslint-disable-next-line no-console
              // console.log(this.results)
              EventBus.$on("clicked-login", userId=> {  
    url + userId
        console.log(url)
        // console.log('1' + url)
        // this.getVehicle(url + userId);
      });  
    },
    mounted() {
      EventBus.$on("clicked-login", userId=> {  
        
        url + userId
        console.log(url)
      });  
          axios.get(url).then(response => {
            // console.log(response)
            console.log(response)
            this.results = response.data.vehicles
            // this.results = response.data[0].vehicles
            // eslint-disable-next-line no-console
            console.log(response)
          })
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
      forceRerender: function() {
        // Remove my-component from the DOM
        this.renderComponent = false;
        
        this.$nextTick(() => {
          // Add the component back in
          this.renderComponent = true;
        });
      },
      getVehicles: function() {
        axios.get(url).then(response => {
            this.results = response.data
            // eslint-disable-next-line no-console
            console.log(response)
          })
      },
      deleteVehicle: function(vehicleId) {
        axios.delete(deleteUrl + vehicleId).then(response => {
            this.results = response.data
           this.getVehicles();
            // this.mounted;
            // this.results.$forceUpdate
            // let vehicleDiv = document.getElementById("vLoop");
            // vehicleDiv.parentNode.removeChild(vehicleDiv);  
            // eslint-disable-next-line no-console
            console.log(response)
            // this.$forceUpdate();

          })
      },
      // getVehicles: function() {
      //   axios.get(url).then(response => {
      //       this.results = response.data
      //       // eslint-disable-next-line no-console
      //       console.log(response)
      //     })
      // }
      
    }
}
</script>