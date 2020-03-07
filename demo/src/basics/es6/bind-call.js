// ----- bind -----
var obj = {
  a: 20,
  getA: function () {
    console.log(this.a)
    return this.a
  }
}

var obj2 = {
  a: 30,
  getB: function () {
    console.log(this.a)
    return this.a
  }
}

var fn = bind1(obj.getA, obj2)

fn(4)

function bind1 (fn, obj) {
  return function () {
    console.log(arguments)
    fn.apply(obj, arguments)
  }
}


Function.prototype.bind2 = function (context) {
  var self = this
  var bindArgs = [].slice.call(arguments, 1)
  return function () {
    var args = [].slice.call(arguments)
    args = bindArgs.concat(args)
    self.apply(context, args)
  }
}

function funcA () {
  this.a = 5
  console.log(this.a)
  console.log(arguments)
}

funcA.prototype.getName = function () {
  console.log('a: getname')
}

var objA = {
  a: 40,
  getName: function () {
    console.log(this.a)
  }
}

var funcB = funcA.bind2(objA, 1, 2, 3)
// var funcB1 = new funcB(444)
// console.log(funcB1.__proto__)
