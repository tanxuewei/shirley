var a
var thisIsAVariable
var _type_ty_ty
var type2type
// var 2thx // 变量不能以数字开头

// var a = 123
// var b = a++

// console.log(a)
// console.log(b)

// switch

function doSwitch (a) {
  let res = 0
  switch (a) {
    case 1: 
      res = 1
    break
    case 2: 
      res = 2
    case 3:
      res = 3
  }

  return res
}

// console.log(doSwitch(2))

// while
var i = 11
while (i < 10) {
  i++
}

// console.log(i) //11

// do-while
var i = 11
do {
  i++
} while (i < 10)

// console.log(i) // 12

function calc () {
  var res = ''
  for (var i = 1; i <= 9; i++) {
    for (var j = 1; j <= 9; j++) {
      res += i + ' * ' + j + ' = ' + i * j + '  '
    }
    res += '\n'
  }
  return res
}

// console.log(calc())

var fn = (function () {
  function someSetup () {
    var setup = 'done'
  }

  function actualWork () {
    alert('Worky-worky')
  }

  someSetup()
  return actualWork
} ())

// fn()
var inner
var a = 'global variable'
var F = function () {
  var b = 'local variable'
  var N = function () {
    var c = 'inner local'
    return b
  }

  inner = N
}

F()

// next
function setup (x) {
  var i = 0
  return function () {
    return x[i++]
  }
}

var next = setup([1, 2, 3])
console.log(next());

