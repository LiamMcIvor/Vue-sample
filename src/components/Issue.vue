 
<template>
    
<div id="vehicleCard">
  <b-table striped hover :items="items" :fields="fields" @row-clicked="rowSelected" v-if="!items">
    <template v-slot:cell(is_addressed)="row">
        <b-form-checkbox ref="checked" v-model="row.detailsShowing" @change="row.toggleDetails">
          Issue Addressed
        </b-form-checkbox>
      </template>
      </b-table>
      <div id="noIssues" v-if="items">
        <h2>Add an issue for your vehicle</h2>
      </div>
      <b-button variant="outline-primary" :to="{ path: 'addIssue' }" >Add Issue</b-button>
      <b-button v-if="this.$store.getters.issueId" variant="outline-primary" @click="setIssueId()" :to="{ path: 'editIssue' }" >Edit Issue</b-button>
      <b-button v-if="this.$store.getters.issueId" @click="showModal" variant="outline-primary">Delete Issue</b-button>
      <b-button @click="vehicles()" variant="outline-primary">Vehicles</b-button>
      <b-button v-if="this.$store.getters.issueId" @click="issueAddressed()" variant="outline-primary">Confirm Update</b-button>
      <!-- <b-button id="show-btn" @click="showModal">Open Modal</b-button> -->
      <b-modal ref="my-modal" hide-footer title="Delete Issue">
        
      <div class="d-block text-center">
        <h3>Are you sure you would like to delete this issue?</h3>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">No</b-button>
      <b-button class="mt-2" variant="outline-warning" block @click="deleteModal">Yes, delete</b-button>
    </b-modal>
    <b-modal ref="my-modal-select" hide-footer >
        
      <div class="d-block text-center">
        <h3>Please select an issue to delete</h3>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Ok</b-button>
    </b-modal>
</div>

</template>


<script>
import { EventBus } from "../eventBus/event-bus.js";
import axios from 'axios';
// import VueSimpleAlert from "vue-simple-alert";
// const url = "http://3.8.223.175:8181/VehicleManagement/getVehicle/";
// const deleteUrl = "http://3.8.223.175:8181/VehicleManagement/issue/";
// const updateUrl = "http://3.8.223.175:8181/VehicleManagement/updateAddressed/";
const url = "http://localhost:8081/getVehicle/";
const deleteUrl = "http://localhost:8081/issue/";
const updateUrl = "http://localhost:8081/updateAddressed/";

export default {
    name: 'Issue',
    data() {
      return {
        results: null,
        fields: ['issueName', 'lastAddressed', 'urgency', 'is_addressed'],
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
    created() {
         axios.get(url + this.$store.getters.vehicleId).then(response => {
            this.items = response.data.issues
         });
    },
     mounted() {
          // axios.get(url  + this.$store.getters.vehicleId).then(response => {
          //   this.items = response.data.issues
          //   // eslint-disable-next-line no-console
          //   // console.log(response)
          //   // console.log(this.items.issue_name)
          // })
    },
    methods: {
       showModal() {
         if(!this.$store.getters.issueId){
           this.$refs['my-modal-select'].show()
         } else {
        this.$refs['my-modal'].show()
         }
      },
      hideModal() {
        this.$refs['my-modal'].hide();
        this.$refs['my-modal-select'].hide();
      },
      deleteModal() {
        this.deleteIssue();
        this.$refs['my-modal'].hide();
        this.getIssues();
      },
      rowSelected(record) {
        // eslint-disable-next-line no-console
        // console.log('id' + record.id)
        this.items.id = record.id
        this.$store.commit('setIssue', this.items.id)
        this.$store.commit('setIssueName', this.items.issueName)
        this.$store.commit('setUrgency', this.items.urgency)
        // eslint-disable-next-line no-console
        console.log('iiid' + this.$store.getters.issueName)
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
        axios.get(url + this.$store.getters.vehicleId).then(response => {
            this.items = response.data.issues
            // eslint-disable-next-line no-console
            // console.log(response)
            // console.log(this.items.issue_name)
          })
      },
      deleteIssue: function() {
        axios.delete(deleteUrl + this.$store.getters.issueId).then(response => {
            this.items = response.data
           this.getIssues();
          })
      },
      vehicles() {
        // this.$router.replace(this.$route.query.redirect || '/VehicleManagement/vehicleCard')
        this.$router.replace(this.$route.query.redirect || '/vehicleCard')
      },
       addressBy: function() {
        this.items.addressBy = this.items.lastAdressed;
        console.log(this.items.lastAddressed)
      },
      issueAddressed() {
        if(this.$refs['checked']) {
          this.items.lastAdressed = new Date().toISOString().substr(0, 10)
          console.log(this.items.issueName)
          let addressed = {
            // issueName: this.$store.getters.issueName,
            lastAddressed: this.items.lastAdressed
            // urgency: this.$store.getters.urgency
          }
          JSON.stringify(addressed)
          console.log(this.items.lastAdressed)
          axios.patch(updateUrl + this.$store.getters.issueId, addressed)
          .then(response => {
            // eslint-disable-next-line no-console
            console.log('patch' + response)
            // this.$router.replace(this.$route.query.redirect || '/issue')
           })
          .catch(e => {
          this.errors.push(e)
          })
        }
        
      }
    },
    computed: {
      // addressBy: function() {
      //   this.items.addressBy = this.items.lastAdressed;
      // }
    }
}
</script>