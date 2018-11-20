define(function (require, exports, module) {
  console.log('加载了add模块')

  var add = function (x, y) {
    return x + y
  }

  // module.exports = {
  //   add: add
  // }
  exports = {
    add: add
  }
  module.exports.add = add
  console.log(module)
})