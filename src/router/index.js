import {
    createRouter,
    createWebHistory
} from "vue-router";
import Home from '../views/home.vue';

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'MDhaiat - Home',
        },
    },

];

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes,
    scrollBehavior() {
        document.getElementById('app').scrollIntoView();
    },
});

export default router;