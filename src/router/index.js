/* eslint-disable */

import { createRouter, createWebHashHistory } from 'vue-router'


import HomeView from '@/views/HomeView.vue'
import EventEdit from '@/views/EventEdit.vue'
import EventDetails from '@/views/EventDetails.vue'
import CreateEvent from '@/views/CreateEvent.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/edit/:id',
    name: 'EventEdit',
    component: EventEdit,
    props: true
  },
  {
    path: '/event-details/:id',
    name: 'EventDetails',
    component: EventDetails,
    props: true
  },
  {
    path: '/create',
    name: 'CreateEvent',
    component: CreateEvent,
    props: true
  },
  //redirect
  {
    path: '/details',
    redirect: '/event-details'
  },
  {
    path: '/event-details',
    redirect: '/NotFound',
    component: NotFound
  },
  {
    path: '/edit',
    redirect: '/NotFound',
    component: NotFound
  },
  //catchall 404
  {
    path: '/NotFound',
    name:'NotFound',
    component: NotFound
  },
  {
    path: "/:catchAll(.*)",
    redirect: 'NotFound',
  
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
