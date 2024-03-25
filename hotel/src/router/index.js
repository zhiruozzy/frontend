import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../views/HomePage.vue';
import Dashboard from '../components/HotolDashboard.vue';
import ControlPanel from '../components/ControlPanel.vue';
import RoomService from '../components/RoomService.vue';
import CheckIn from '../components/CheckIn.vue';
import CheckOut from '../components/CheckOut.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage,
        children: [
            { path: '/dashboard', name: 'Dashboard', component: Dashboard },
            { path: '/control', name: 'ControlPanel', component: ControlPanel },
            { path: '/room-service', name: 'RoomService', component: RoomService },
            { path: '/check-in', name: 'CheckIn', component: CheckIn },
            { path: '/check-out', name: 'CheckOut', component: CheckOut },
        ],
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
