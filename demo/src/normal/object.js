// 工厂函数
var createPerson = function (name, age) {
  // 声明一个中间对象，该对象就是工厂模式的模子
  var o = new Object();

  // 一次添加我们的属性和方法
  o.name = name;
  o.age = age;
  o.getName = function () {
    return this.name;
  }

  return o;
}

// 创建两个实例
var perTom = createPerson('TOM', 20)
var perJake = createPerson('JAKE', 22)

// console.log(perTom instanceof Object)
// console.log(perTom instanceof createPerson)  // false  没有办法识别对象实例的类型

/*--------------------------------------------------------------------------------------------------------*/

// 构造函数
var Person = function(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getName = function () {
  return this.name
}

var p1 = new Person('Ness', 20);
var p2 = new Person('shirley', 18);
// console.log(p1.getName());  // Ness

// console.log(p1 instanceof Person); // true  可以识别

// console.log(p1.getName == p2.getName)

// Person.prototype.constructor == Person
// console.log(Person.prototype == p1.__proto__)

// 继承
// function Children(name, age, job) {
//   // 复制构造函数内的方法
//   Person.call(this, name, age)
//   this.job = job
// }

// // 继承原型
// Children.prototype = new Person()

// var c1 = new Children('shirley', 20, 'fe')
// console.log(c1.name)


// 更好的继承
function Children(name, age, job) {
  // 复制构造函数内的方法
  Person.call(this, name, age)
  this.job = job
}

function create (proto, options) {
  // 创建一个空对象
  var tmp = {}

  // 让这个新的空对象成为父类对象的实例
  tmp.__proto__ = proto

  // 传入的方法都挂载到新对象上，新的对象将作为子类对象的原型
  Object.definePropertied(tmp, options)

  return tmp;
}


// 继承原型
Children.prototype = Object.create(Person.prototype, {
  constructor: {
    value: Children
  },
  getGrade: {
    value: function () {
      return this.job
    }
  }
})

var c1 = new Children('shirley', 20, 'fe')
console.log(c1.getGrade())

// create = Object.create