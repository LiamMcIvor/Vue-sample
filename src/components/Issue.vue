 
<template>
    
<div id="vehicleCard">
  <b-table striped hover :items="items" :fields="fields" @row-clicked="rowSelected" :selected.sync="selected">
    <template v-slot:cell(is_addressed)="row">
        <b-form-checkbox v-model="row.detailsShowing" @change="row.toggleDetails">
          Issue Addressed
        </b-form-checkbox>
      </template>
      </b-table>
      <b-button :to="{ path: 'addIssue' }" variant="primary">Add Issue</b-button>
      <b-button @click="rowSelected(record)" :to="{ path: 'editIssue' }" variant="primary">Edit Issue</b-button>
</div>

</template>


<script>
import { EventBus } from "../eventBus/event-bus.js";
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
    },
    methods: {
      rowSelected(record) {
        // eslint-disable-next-line no-console
        console.log(record.id)
        EventBus.$emit("clicked-event", record.id);
            return record.id
      },
      // setIssueId(issueId){
      //   // eslint-disable-next-line no-console
      //       console.log('123' + issueId)
      //       EventBus.$emit("clicked-event", issueId);
      //   return issueId;
      // }
    },
    computed: {
      // id: function() {
      //    rowSelected(record)
      // }
    }
}
</script>