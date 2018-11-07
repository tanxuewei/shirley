function Person (name, age) {
  this.name = name
  this.age = age

  // 没有必要创建两个一模一样的函数，并且这两个函数还不相等，可以选择原型模式解决这个问题
  this.getAge = function () {
    return this.age
  }
}

Person.prototype.getName = function () {
  return this.name
}

var p1 = new Person('shirley', 18)
console.log(p1.getAge())

var p2 = new Person('shirley2', 19)
console.log(p2.getAge())