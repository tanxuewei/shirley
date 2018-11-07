(function () {
  var a = 10;
  var b = 20;

  function add (num1, num2) {
    var num1 = num1 || a
    var num2 = num2 || b

    return num1 + num2
  }
  
  // 将引用保存在外部执行环境的变量中，形成闭包，防止该执行环境被垃圾回收
  window.add = add
})();

add(10, 20)

for (var i=1; i<=5; i++) {
  (function(i) {
    setTimeout(function timer() {
      // console.log(i)
    }, i*1000)
  })(i)
}

Function.prototype.bind = function (obj) {
  var fn = this
  return function () {
    return fn.call(obj, arguments)
  }
}

var obj = {
  a: 20,
  getA: function () {
    setTimeout(function () {
      // console.log(this.a)
    }.bind(this), 1000)
  }
}

obj.getA()

var array = [1, 3, 'h', 5, 'm', '4'];

function getNumbers (arr) {
  return arr.filter(function (item) {
    return typeof item === 'number'
  })
}
// console.log(getNumbers(array))

function fn (count) {
  return {
    cal: function () {
      return count++
    }
  }
}

var obj = fn(5)
// console.log(obj.cal())
// console.log(obj.cal())
// console.log(obj.cal())

// 斐波拉契数列 0, 1，1，2，3，5，8，13, 求第几项
function fabinacci () {
  var cache = [0, 1]

  return function __fabinacci (n) {
    return typeof cache[n] === 'number'
         ? cache[n]
         : cache[n] = __fabinacci(n - 1) + __fabinacci(n - 2)
  }
}

var fb = fabinacci()
console.log(fb(10))