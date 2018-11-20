define(function(require, exports, module) {
  console.log('加载了square模块')
  var multiplyModule = require('./multiply')
  var square = function (x) {
    return multiplyModule.multiply(x, x)
  }

  module.exports = {
    square: square
  }
})