import Vue from 'vue';
import Router from 'router';
import VehicleCard from '@/components/VehicleCard';
import Home from '@/components/Home';

Vue.use(Router);

export default new Router({
    routes: [
       
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/vehicleCard',
            name: 'VehicleCard',
            component: VehicleCard
        }
    ]
});