import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/mon-module',
    name: 'Mon Module',
    component: () => import('../../modules/monModule/MonModule.vue')
  },
  {
    path: '/mon-autre-module',
    name: 'Mon Autre Module',
    component: () => import('../../modules/monAutreModule/MonAutreModule.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
