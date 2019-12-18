import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/scss/custom.scss'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import VehicleCard from './components/VehicleCard';
import Home from './components/Home';
import SignUp from './components/SignUp';

Vue.use(BootstrapVue);
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/vehicleCard', component: VehicleCard },
    { path: '/signUp', component: SignUp }
    // { path: '/about', component: About }
  ]
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
