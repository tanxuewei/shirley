import Vue from 'vue'
import router from './router'
import aa from './aaa.js'
import App from './App.vue'
import './less/common.less'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})