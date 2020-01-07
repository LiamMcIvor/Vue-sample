<template>
    
<div id="vehicleCard">
  <b-table striped hover :items="items" :fields="fields" >
    <template v-slot:cell(is_addressed)="row">
        <b-form-checkbox v-model="row.detailsShowing" @change="row.toggleDetails">
          Issue Addressed
        </b-form-checkbox>
      </template>
      </b-table>
</div>


</template>


<script>
export default {
    name: 'Issue',
    data() {
      return {
        fields: ['issue_name', 'last_addressed', 'address_by', 'is_addressed'],
        items: [
          {
            issue_name: null,
            last_addressed: null,
            address_by: null
          }
        ]
      }
    }
}
</script>