 
<template>
    
<div id="vehicleCard">
  <b-table striped hover :items="items" :fields="fields" @row-clicked="rowSelected">
    <template v-slot:cell(is_addressed)="row">
        <b-form-checkbox v-model="row.detailsShowing" @change="row.toggleDetails">
          Issue Addressed
        </b-form-checkbox>
      </template>
      </b-table>
      <b-button :to="{ path: 'addIssue' }" variant="primary">Add Issue</b-button>
      <b-button @click="setIssueId()" :to="{ path: 'editIssue' }" variant="primary">Edit Issue</b-button>
      <b-button @click="showModal" variant="primary">Delete Issue</b-button>
      <!-- <b-button id="show-btn" @click="showModal">Open Modal</b-button> -->
      <b-modal ref="my-modal" hide-footer title="Delete Issue">
      <div class="d-block text-center">
        <h3>Are you sure you would like to delete this issue?</h3>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">No</b-button>
      <b-button class="mt-2" variant="outline-warning" block @click="deleteModal">Yes, delete</b-button>
    </b-modal>
</div>

</template>


<script>
import { EventBus } from "../eventBus/event-bus.js";
import axios from 'axios';
// import VueSimpleAlert from "vue-simple-alert";
const url = "http://localhost:8081/issue";
const deleteUrl = "http://localhost:8081/issue/";

export default {
    name: 'Issue',
    data() {
      return {
        results: null,
        fields: ['issueName', 'lastAddressed', 'urgency', 'is_addressed', 'addressBy'],
        items: [
          {
            id: null,
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
       showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      deleteModal() {
        this.deleteIssue();
        this.$refs['my-modal'].hide();
      },
      rowSelected(record) {
        // eslint-disable-next-line no-console
        // console.log('id' + record.id)
        this.items.id = record.id
        // eslint-disable-next-line no-console
        console.log('iiid' + this.items.id)
        // EventBus.$emit("clicked-issue", record.id);
            // return record.id
      },
      setIssueId(){
        // eslint-disable-next-line no-console
            // console.log('123' + record.id)
            EventBus.$emit("clicked-issue", this.items.id);
        // return issueId;
      },
      getIssues: function() {
        axios.get(url).then(response => {
            this.items = response.data
            // eslint-disable-next-line no-console
            console.log(response)
            // console.log(this.items.issue_name)
          })
      },
      deleteIssue: function() {
        axios.delete(deleteUrl + this.items.id).then(response => {
            this.results = response.data
           this.getIssues();
          //   this.mounted;
          //   this.results.$forceUpdate
            // let vehicleDiv = document.getElementById("vLoop");
            // vehicleDiv.parentNode.removeChild(vehicleDiv);  
            // eslint-disable-next-line no-console
            console.log(response)
            this.$forceUpdate();

          })
      },
    },
    computed: {
      // id: function() {
      //    rowSelected(record)
      // }
    }
}
</script>