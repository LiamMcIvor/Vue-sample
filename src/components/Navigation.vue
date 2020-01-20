
<template>

<div>
  <b-navbar toggleable="lg">
    <b-navbar-brand @click="home()">Home</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <!-- <b-nav-item :to="{ path: '/' }">Home</b-nav-item> -->
        <b-nav-item :to="{ path: 'signUp' }">Sign Up</b-nav-item>
        <!-- <b-nav-item :to="{ path: 'register' }">Register</b-nav-item> -->
        <!-- :to="{name: 'VehicleCard'}" -->
        <b-nav-item @click="clearVehicle()" :to="{ path: 'vehicleCard' }">Vehicles</b-nav-item>
        <!-- <b-nav-item :to="{ path: 'addVehicle' }">Add Vehicle</b-nav-item>
        <b-nav-item :to="{ path: 'issue' }">Issues</b-nav-item>
        <b-nav-item :to="{ path: 'addIssue' }">Add Issue</b-nav-item>
        <b-nav-item :to="{ path: 'editIssue' }">Edit Issue</b-nav-item>
        <b-nav-item :to="{ path: 'editVehicle' }">Edit Vehicle</b-nav-item> -->
        <!-- <b-nav-item v-if="authenticated" :to="{ path: 'login' }" v-on:click.native="logout()" replace>Logout</b-nav-item>
        <router-view @authenticated="setAuthenticated" /> -->
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form> -->
        <!-- auth added bellow -->
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>{{ this.$store.getters.userName }}</em>
          </template>
          <!-- <b-dropdown-item @click="signOut()" :to="{ path: '/VehicleManagement/' }">Sign out</b-dropdown-item> -->
          <b-dropdown-item @click="signOut()" :to="{ path: '/' }">Sign out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

</template>

<script>
// import router from '../router';

export default {
    name: 'Navigation',
    data() {
            return {
                authenticated: true,
                mockAccount: {
                    username: "",
                    password: ""
                }
            }
        },
      mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
           emitUserId() {
             this.$store.commit('change', this.id)
             console.log(this.$store.getters.id)
            // console.log('emit'+this.id)
            // EventBus.$emit("user-id", this.id);
        },
          clearVehicle() {
            this.$store.commit('vehicleSet', null)
            console.log(this.$store.getters.vehicleId)
            // this.$router.replace(this.$route.query.redirect || '/VehicleManagement/vehicleCard')
            this.$router.replace(this.$route.query.redirect || '/vehicleCard')
          },
          signOut() {
            this.$store.commit('setAuthenticated', false)
          },
          home() {
            // this.$router.replace(this.$route.query.redirect || '/VehicleManagement/vehicleCard')
            this.$router.replace(this.$route.query.redirect || '/vehicleCard')
          }
        },
}

</script>
