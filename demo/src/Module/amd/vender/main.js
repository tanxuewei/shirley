require(['./add', './circle', './square'], function (addModule, multiplyModule, squareModule) {
  console.log('加载main模块')
  console.log(addModule.add(1, 1))
  console.log(multiplyModule.circle(2))
  console.log(squareModule.square(3))
})