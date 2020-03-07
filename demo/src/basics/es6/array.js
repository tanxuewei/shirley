// demo大合集
var users = [
  {
    id: 1,
    name: "a"
  },
  {
    id: 2,
    name: "a"
  },
  {
    id: 3,
    name: "b"
  },
  {
    id: 4,
    name: "v"
  }
]
Array.prototype.unique = function () {
  // let names = this.map((item) => item.name)
  // return [...new Set(names)]
  let names = Array.from(this, (item) => item.name)
  return [...new Set(names)]
}

// console.log(users.unique())

var obj = {
  a: 1,
  b: 2,
  c: {
    name: 'malimalihong'
  }
}

function simpleCopy (obj) {
  let result = {}
  for (let key in obj) {
    result[key] = obj[key]
  }
  return result
}

function deepCopy (obj) {
  let result = {}
  for (let key in obj) {
    let item = obj[key]
    result[key] = typeof item === 'object' ? deepCopy(item) : item
  }
  return result
}

// var newObj = simpleCopy(obj)
var newObj = deepCopy(obj)
obj.a = 3
newObj.a // 1

obj.c.name = 'new'
newObj.c.name // 'new'

// 参数 x 与 函数内部变量 x 同名，x 取参数值，如果 x 被复制，x 为 赋值后的 值
function test (x) {
  console.log(x)
  var x = 10

}

// test(30)

// 方法一和方法二处理闭包
for (var i = 1; i <= 5; i++) {
  setTimeout((function timer(i) {
    return function () {
      // console.log(i);
    }
  })(i), i * 1000);
}

for (var i = 1; i <= 5; i++) {
  (function (i) {
    setTimeout(function timer() {
        // console.log(i);
    }, i * 1000);
  })(i)
}

function Person (name) {
  this.name = name
}

Person.prototype.getName = function () {
  return this.name
}

var objectFactory = function () {
  var obj = {}
  var Constructor = [].shift.call(arguments)
  obj.__proto__ = Constructor.prototype
  var result = Constructor.apply(obj, arguments)

  return typeof result === 'object' ? result : obj
}

// console.log(objectFactory(Person, 'shirley'))

var person = new Person('haha')
// console.log(person)

console.log(Math.max([1, 2, 5, 9]))
