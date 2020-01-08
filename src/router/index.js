import Vue from 'vue';
import Router from 'router';
import VehicleCard from '@/components/VehicleCard';
import Home from '@/components/Home';
import RegisterWizard from '@/components/RegisterWizard';
import Issue from '@/components/Issue';

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
            component: RegisterWizard
        },
        {
            path: '/issue',
            name: 'Issue',
            component: Issue
        }
    ]
});