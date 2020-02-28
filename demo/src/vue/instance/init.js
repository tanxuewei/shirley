exports._init = function (options) {
  this.options = options
  this.$data = options.data
  this.$el = document.querySelector(options.el)
  this.methods = options.methods

  Observer(this.$data, this)
}