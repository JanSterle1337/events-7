/* eslint-disable */

import { createRouter, createWebHashHistory } from 'vue-router'


import HomeView from '@/views/HomeView.vue'
import EventEdit from '@/views/EventEdit.vue'
import EventDetails from '@/views/EventDetails.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/edit/:id',
    name: 'EventEdit',
    component: EventEdit
  },
  {
    path: '/event-details/:id',
    name: 'EventDetails',
    component: EventDetails,
    props: true
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
