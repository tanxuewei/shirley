define(function () {
  console.log('加载了multiply模块')

  var multiply = function (x, y) {
    return x * y
  }

  return {
    multiply: multiply
  }
})