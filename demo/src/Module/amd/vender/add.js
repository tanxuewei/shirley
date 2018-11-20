define(function () {
  console.log('加载了add模块')

  var add = function (x, y) {
    return x + y
  }

  return {
    add: add
  }
})