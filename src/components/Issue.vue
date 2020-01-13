 
<template>
    
<div id="vehicleCard">
  <b-table striped hover :items="items" :fields="fields" >
    <template v-slot:cell(is_addressed)="row">
        <b-form-checkbox v-model="row.detailsShowing" @change="row.toggleDetails">
          Issue Addressed
        </b-form-checkbox>
      </template>
      </b-table>
      <b-button :to="{ path: 'addIssue' }" variant="primary">Add Issue</b-button>
</div>

</template>


<script>
import axios from 'axios';
const url = "http://localhost:8081/issue"

export default {
    name: 'Issue',
    data() {
      return {
        results: null,
        fields: ['issueName', 'lastAddressed', 'urgency', 'is_addressed', 'addressBy'],
        items: [
          {
            issueName: null,
            lastAdressed: null,
            urgency: null
          }
        ]
      }
    },
     mounted() {
          axios.get(url).then(response => {
            this.items = response.data
            // eslint-disable-next-line no-console
            console.log(response)
            // console.log(this.items.issue_name)
          })
    }
}
</script>