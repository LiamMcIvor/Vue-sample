import Vue from 'vue';
import Router from 'router';
import VehicleCard from '@/components/VehicleCard';
import Home from '@/components/Home';
import Register from '@/components/Register';
import Issue from '@/components/Issue';
import AddVehicle from '@/components/AddVehicle';
import AddIssue from '@/components/AddIssue';

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
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/issue',
            name: 'Issue',
            component: Issue
        },
        {
            path: '/addVehicle',
            name: 'AddVehicle',
            component: AddVehicle
        },
        {
            path: '/addIssue',
            name: 'AddIssue',
            component: AddIssue
        }
    ]
});