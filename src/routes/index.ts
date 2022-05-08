import HomePage from '@/pages/homePage.vue'
import LoginPage from '@/pages/loginPage.vue'
import ClientZonePage from '@/pages/clientZonePage.vue'

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginPage },
  { path: '/client-zone', component: ClientZonePage },
]

const history = createWebHistory();

const router = createRouter({
  history,
  routes
})

export default router
