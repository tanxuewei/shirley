import Vue from 'vue'
import router from './router'
import store from './store'
import aa from './aaa.js'
import App from './App.vue'
import SComponents from '@/components/index'
import './less/common.less'
import {
  Steps
} from 'ant-design-vue'

Vue.use(Steps)
Vue.use(SComponents)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})