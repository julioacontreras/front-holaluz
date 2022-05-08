import Home from '@/pages/home.vue'
import Login from '@/pages/login.vue'
import ClientZone from '@/pages/clientZone.vue'

import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/client-zone', component: ClientZone },
]

const history = createWebHistory();

const router = createRouter({
    history,
    routes
})

export default router
