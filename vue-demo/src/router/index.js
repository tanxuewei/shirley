import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/module/index')
    }, {
      path: '/service',
      component: () => import('@/module/service')
    },
    {
      path: '/business',
      component: () => import('@/module/business')
    }
  ]
})