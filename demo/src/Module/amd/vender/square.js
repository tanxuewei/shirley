define(['./multiply'], function(multiplyModule) {
  console.log('加载了square模块')
  var square = function (x) {
    return multiplyModule.multiply(x, x)
  }

  return {
    square: square
  }
})