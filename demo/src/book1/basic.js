// 搞一下闭包

var data = []

for (var i = 0; i < 3; i++) {
  var c = {
    a: 3
  }
  data[i] = (function (i, c) {
    return function () {
      console.log(i)
      console.log(c)
      // return i
    }
  })(i, c)

  c.a = 8
}

// console.log(data[0]())

var a = 1

function f() {
  function n () {
    // alert(a)
    console.log(1)
  }

  var a = 2
  n()
}

f() // 2

// 对象
function C () {
  this.a = 1
  // return {
  //   b: 2
  // }
}

var c1 = new C()
// console.log(c1)

function F () {
  function C () {
    return this
  }
  return C()
}

var o = new F()  // o 指向 window

function D () {
  this.a = 1
  return false
}

console.log(typeof new D()) // object

var c = [1, 2, [1, 2]]
c.sort()

function MyString (str) {
  this.str = str
  this.length = str.length
  for (var i = 0; i < str.length; i++) {
    this[i] = str[i]
  }

}

MyString.prototype.toString = function () {
  return this.str
}

var test = new MyString('hello')
test.length

test.toString()
test[0]

// 原型
function Gadget (name, color) {
  this.name = name
  this.color = color
  this.whatareyou = function () {
    return 'I am a ' + this.color + ' ' + this.name
  }
}

Gadget.prototype = {
  constructor: Gadget,
  price: 100,
  rating: 3,
  getInfo () {
    return 'Rating: ' + this.rating + ', price: ' + this.price
  }
}

var newtoy = new Gadget('webcam', 'black')

Gadget.prototype.get = function (what) {
  return this[what]
}

newtoy.get('price')

// 原型链继承
// function Shape () {
//   this.name = 'shape'
//   this.toString = function () {
//     return this.name
//   }
// }

// Shape.prototype.getType = function () {
//   return this.type
// }

// function TWODShape () {
//   this.name = '2D shape'
// }

// function Triangle (side, height) {
//   this.name = 'triangle'
//   this.side = side
//   this.height = height
//   this.getArea = function () {
//     return this.side * this.height / 2
//   }
// }

// TWODShape.prototype = new Shape()
// Triangle.prototype = new TWODShape()

// TWODShape.prototype.constructor = TWODShape
// Triangle.prototype.constructor = Triangle

// var my = new Triangle(5, 10)
// my.getArea()
// my.toString()

// 临时构造器
// function Shape () {}
// Shape.prototype.name = 'Shape'
// Shape.prototype.toString = function () {
//   return this.name
// }

// function TWODShape () {}
// var F = function () {}
// F.prototype = Shape.prototype
// TWODShape.prototype = new F()
// TWODShape.prototype.constructor = TWODShape
// TWODShape.prototype.name = '2D shape'

// var my = new TWODShape()
// console.log(my.name)

// function Person () {

// }
// Person.prototype.name = 'kevin'
// var person1 = new Person()
// var person2 = new Person()
// console.log(person1.name) // kevin
// console.log(person2.name) // kevin

function Parent () {
  this.name = 'kevin'
}

Parent.prototype.getName = function () {
  return this.name
}

function Child () {

}

Child.prototype = new Parent()

var child = new Child()

// console.log(child.getName())

var book = {
  _year: 2004,
  edition: 1
}
Object.defineProperty(book, 'year', {
  get: function () {
    return this._year
  },

  set: function (newVal) {
    if (newVal > 2004) {
      this._year = newVal
      this.edition += newVal - 2004
    }
  }
})

book.year = 2005
console.log(book.edition)  // 2