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
    <ul> Make: {{ vehicle.make }} </ul>
    <ul> Model: {{ vehicle.model }} </ul>
    <ul> Tax Renewal Date: {{ vehicle.taxDate }} </ul>
    <ul> Insurance Renewaql Date: {{ vehicle.insuranceDate }} </ul>
    <ul> MOT Renewal Date: {{ vehicle.motDate }} </ul>
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