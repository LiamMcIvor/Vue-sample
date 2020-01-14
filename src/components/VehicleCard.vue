<template>
    
<div id="vehicleCard">
  <div 
    v-for="vehicle in results"
    :key="vehicle"
  >
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
  </b-card>
  </div>
</div>


</template>


<script>
import { EventBus } from "../eventBus/event-bus.js";  
import axios from 'axios';
const url = "http://localhost:8081/vehicle"

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
      results: null
    }
  },
    mounted() {
          axios.get(url).then(response => {
            this.results = response.data
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
      }
    }
}
</script>