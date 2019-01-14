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
    }, {
      path: '/business',
      component: () => import('@/module/business')
    }, {
      path: '/cart',
      component: () => import('@/module/cart')
    }, {
      path: '/product',
      component: () => import('@/module/product')
    }, {
      path: '/score',
      component: () => import('@/module/score')
    }
  ]
})