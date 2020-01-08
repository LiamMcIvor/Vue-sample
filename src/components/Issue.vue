<template>
    
<div id="vehicleCard">
  <b-card
    title="Vehicle Issues"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Content of vehicle
    </b-card-text>
    <v-text-field>textfield</v-text-field>
    <v-text-field>textfield</v-text-field>
    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</div>


</template>


<script>
import axios from 'axios';
const url = "http://localhost:8081/issue"


export default {
    name: 'Issue',
     mounted() {
          axios.get(url).then(response => {
            this.results = response.data
            // eslint-disable-next-line no-console
            console.log(response.data)
          })
          // eslint-disable-next-line no-console
          console.log(1)
        }
        
}
</script>