console.log('hello world')
import Vue from 'vue'
import aa from './aaa.js'
import App from './App.vue'
import './less/common.less'

new Vue({
  el: '#app',
  render: h => h(App)
})