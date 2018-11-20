console.log('加载了square模块')
var multiply = require('./multiply')
var square = function (x) {
  return multiply.multiply(x, x)
}

module.exports.square = square 