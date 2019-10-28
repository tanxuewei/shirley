var foo = {
  value: 1
}

function bar () {
  console.log(arguments)
  console.log(this.value)
}

Function.prototype.MyCall = function (context) {
  var context = context || window
  context.fn = this
  var args = []
  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push('arguments[' + i + ']')
  }
  // 主要是为了传过去对应的参数，个数对应
  var result = eval('context.fn(' + args + ')')
  delete context.fn
  return result
}

Function.prototype.MyCall6 = function (context) {
  var context = context || window
  context.fn = this
  var args = []
  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push(arguments[i])
  }
  // 主要是为了传过去对应的参数，个数对应
  var result = context.fn(...args)
  delete context.fn
  return result
}

// bar.MyCall(foo, 'ccc', 'ddd')
bar.MyCall6(foo, 'ccc', 'ddd')

Function.prototype.MyApply = function (context, arr) {
  var context = context || window
  context.fn = this

  var result
  if (!arr) {
    result = context.fn()
  } else {
    var args = []
    for (var i = 0, len = arr.length; i < len; i++) {
      args.push('arr[' + i + ']')
    }
    result = eval('context.fn(' + args + ')')
  }
  delete context.fn
  return result
}

// bar.MyApply(foo, ['eee', 'fff'])


function object () {
  var obj = {}
  Constructor = [].shift().call(arguments)
  obj.__proto__ = Constructor.prototype

  var ret = Constructor.call(obj, arguments)

  return typeof ret === 'object' ? ret : obj
}

function Parent (name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}

Parent.prototype.getName = function () {
  console.log(this.name)
}

function Child (name, age) {
  Parent.call(this, name)
  this.age = age
}

Child.prototype = new Parent()
Child.prototype.constructor = Child

var child1 = new Child('kevin', 18)

child1.colors.push('black')

console.log(child1.name) // kevin
console.log(child1.age)  // 18
console.log(child1.colors) // ["red", "blue", "green", "black"]

var child2 = new Child('daisy', '20');

console.log(child2.name); // daisy
console.log(child2.age); // 20
console.log(child2.colors); // ["red", "blue", "green"]