function Publisher () {
  this.subscribers = []
}
Publisher.prototype.deliver = function (data) {
  this.subscribers.forEach(function(fn) {
    fn(data)
  })
  return this
}