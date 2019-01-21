import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router =  new Router({
  // mode: 'history',
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

router.beforeEach((to, from, next) => {
  next()
})

router.beforeResolve((to, from, next) => {
  next()
})

export default router