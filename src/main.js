import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/scss/custom.scss'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import VehicleCard from './components/VehicleCard';
// import Home from './components/Home';
import SignUp from './components/SignUp';
import Register from './components/Register';
import Issue from './components/Issue';
import vuelidate from 'vuelidate';
import AddVehicle from './components/AddVehicle';
import AddIssue from './components/AddIssue';
import EditIssue from './components/EditIssue';
import EditVehicle from './components/EditVehicle';
import Login from './components/Login';
// import { EventBus } from "./event-bus.js";  
import axios from './backend/vue-axios';
import { store } from './store/store'

Vue.use(vuelidate);
Vue.use(BootstrapVue);
Vue.use(VueRouter);
// Vue.use(EventBus);

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  base: '/VehicleManagement/',
  routes: [
    // { path: '/', component: Home },
    { path: '/VehicleManagement/vehicleCard', component: VehicleCard, 
    // { path: '/vehicleCard', component: VehicleCard, 
    beforeEnter: ((to, from, next) => {
      if (!store.state.isAuthenticated) {
        // console.log('store')
        next('/')
      } else {
        // console.log('store')
        next()
      }
    })
  },
    { path: '/VehicleManagement/signUp', component: SignUp },
    // { path: '/signUp', component: SignUp },
    { path: '/VehicleManagement/register', component: Register },
    // { path: '/register', component: Register },
    { path: '/VehicleManagement/issue', component: Issue, 
    // { path: '/issue', component: Issue, 
    beforeEnter: ((to, from, next) => {
      if (!store.state.isAuthenticated) {
        // console.log('store')
        next('/')
      } else {
        // console.log('store')
        next()
      }
    })
  },
    { path: '/VehicleManagement/addVehicle', component: AddVehicle,
    // { path: '/addVehicle', component: AddVehicle,
     beforeEnter: ((to, from, next) => {
      if (!store.state.isAuthenticated) {
        // console.log('store')
        next('/')
      } else {
        // console.log('store')
        next()
      }
    })
    },
    { path: '/VehicleManagement/addIssue', component: AddIssue, 
    // { path: 'addIssue', component: AddIssue, 
    beforeEnter: ((to, from, next) => {
      if (!store.state.isAuthenticated) {
        // console.log('store')
        next('/')
      } else {
        // console.log('store')
        next()
      }
    })
  },
    { path: '/VehicleManagement/editIssue', component: EditIssue, 
    // { path: '/editIssue', component: EditIssue, 
    beforeEnter: ((to, from, next) => {
      if (!store.state.isAuthenticated) {
        // console.log('store')
        next('/')
      } else {
        // console.log('store')
        next()
      }
    })
  },
    { path: '/VehicleManagement/editVehicle', component: EditVehicle, 
    // { path: '/editVehicle', component: EditVehicle, 
    beforeEnter: ((to, from, next) => {
      if (!store.state.isAuthenticated) {
        // console.log('store')
        next('/')
      } else {
        // console.log('store')
        next()
      }
    })
  },
    { path: '/VehicleManagement/', name: 'Login', component: Login },
    // { path: '/', name: 'Login', component: Login },
    // { path: '/about', component: About }
  ]
})


// router.beforeEach((to, from, next) => {
//   if (!store.state.isAuthenticated) {
//     // console.log('store')
//     next()
//   } else {
//     // console.log('store')
//     next()
//   }
// })

/* eslint-disable no-new */
new Vue({
  vuetify,
  router,
  axios,
  store,
  render: h => h(App)
}).$mount('#app')
