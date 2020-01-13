
<template>

<div>
  <b-navbar toggleable="lg">
    <b-navbar-brand :to="{ path: '/' }">Home</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <!-- <b-nav-item :to="{ path: '/' }">Home</b-nav-item> -->
        <b-nav-item :to="{ path: 'signUp' }">Sign Up</b-nav-item>
        <b-nav-item :to="{ path: 'register' }">Register</b-nav-item>
        <!-- :to="{name: 'VehicleCard'}" -->
        <b-nav-item :to="{ path: 'VehicleCard' }">Vehicles</b-nav-item>
        <b-nav-item :to="{ path: 'addVehicle' }">Add Vehicle</b-nav-item>
        <b-nav-item :to="{ path: 'issue' }">Issues</b-nav-item>
        <b-nav-item :to="{ path: 'addIssue' }">Add Issue</b-nav-item>
        <b-nav-item :to="{ path: 'editIssue' }">Edit Issue</b-nav-item>
        <b-nav-item :to="{ path: 'editVehicle' }">Edit Vehicle</b-nav-item>
        <!-- <b-nav-item v-if="authenticated" :to="{ path: 'login' }" v-on:click.native="logout()" replace>Logout</b-nav-item>
        <router-view @authenticated="setAuthenticated" /> -->
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form> -->

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Sign ip</b-dropdown-item>
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
                    username: "nraboy",
                    password: "password"
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
            logout() {
                this.authenticated = false;
            }
        },
}

</script>
