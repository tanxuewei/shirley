function Vue (options) {
  this._init(options)  
}

Vue.prototype = {
  constructor: Vue,
  ...require('./instance/init'),
  ...require('./instance/compile'),
  observer: {...require('./observe')}
}

window.Vue = Vue