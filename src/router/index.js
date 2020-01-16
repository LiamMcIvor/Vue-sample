import Vue from 'vue';
import Router from 'router';
import VehicleCard from '@/components/VehicleCard';
import Home from '@/components/Home';
import Register from '@/components/Register';
import Issue from '@/components/Issue';
import AddVehicle from '@/components/AddVehicle';
import AddIssue from '@/components/AddIssue';
import EditIssue from '@/components/EditIssue';
import EditVehicle from '@/components/EditVehicle';
import Login from '@/components/Login';

Vue.use(Router);

export default new Router({
    routes: [
       
        {
            path: '',
            name: 'Login',
            component: Login
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
        },
        {
            path: '/editIssue',
            name: 'EditIssue',
            component: EditIssue
        },
        {
            path: '/editVehicle',
            name: 'EditVehicle',
            component: EditVehicle
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
});