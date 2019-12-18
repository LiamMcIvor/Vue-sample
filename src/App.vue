<template>
  
  <v-app>
    <router-view></router-view>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <Navigation color="primary"/>
      </div>

      <v-spacer></v-spacer>

      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-content>
      <!-- <SignUp/> -->
      <!-- <VehicleCard/> -->
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import Navigation from './components/Navigation';
// import VehicleCard from '/components/VehicleCard';
// import SignUp from './components/SignUp';

export default {
  name: 'App',

  components: {
    Navigation,
    // VehicleCard, 
    // SignUp
  },

  data: () => ({
    //
  }),
};
</script>
