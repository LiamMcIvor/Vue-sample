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
  {{ vehicle.make }}
  {{ vehicle.model }}
</div>
    <b-card-text>
      Content of vehicle
    </b-card-text>
    <v-text-field>textfield</v-text-field>
    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
  </div>
</div>


</template>


<script>
import axios from 'axios';
const url = "http://localhost:8081/vehicle"

export default {
    e1: '#vdetails',
    name: 'VehicleCard',
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
    }
}
</script>