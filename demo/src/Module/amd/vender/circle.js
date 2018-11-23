define(['./multiply'], function (multiplyModule) {
  console.log('加载了circle模块')
  var circle = function (x) {
    return multiplyModule.multiply(x, 3)
  }

  return {
    circle: circle
  }
})