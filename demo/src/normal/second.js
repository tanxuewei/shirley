// 闭包
for (var i = 1; i <= 5; i++) {
  (function (_i) {
    setTimeout(function () {
      console.log(_i)
    }, _i*1000)
  })(i)
}

// 使用let
for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i)
    }, i*1000)
}