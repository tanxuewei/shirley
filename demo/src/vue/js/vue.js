function Vue (options) {
  this.options = options
  this.$el = options.el
  this.$data = options.data
  this.methods = options.methods
  this.init()
}

Vue.prototype.init = function () {
  // 渲染页面暂时去掉
  // this.renderDom(this.$el, this.$data.msg)
}

Vue.prototype.renderDom = function (node, val) {
  if (typeof node === 'string') {
    document.querySelector(node).innerText = val
  }
}

window.Vue = Vue