function Vue (options) {
  this.options = options
  this.$el = options.el
  this.init()
}

Vue.prototype.init = function () {
  this.renderDom()
}

Vue.prototype.renderDom = function () {
  if (typeof this.$el === 'string') {
    document.querySelector(this.$el).innerText = '我是一个DOM'
  }
}

window.Vue = Vue