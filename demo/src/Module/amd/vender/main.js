require(['./add', './square'], function (addModule, squareModule) {
  console.log('加载main模块')
  console.log(addModule.add(1, 1))
  console.log(squareModule.square(3))
})