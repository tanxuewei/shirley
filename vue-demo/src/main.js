import Vue from 'vue'
import router from './router'
import store from './store'
import aa from './aaa.js'
import App from './App.vue'
import './less/common.less'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})