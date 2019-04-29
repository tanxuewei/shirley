var name = 'localname'
var obj = {
  name: 'objname',
  fn: function () {
    console.log(arguments)
    return this.name
  }
}

// console.log(obj.fn()); // localname
Function.prototype.MyBind = function (context) {
  var self = this
  var args = Array.prototype.slice.call(arguments, 1)
  return function () {
    var bindArgs = Array.prototype.slice.call(arguments, 0)
    return self.apply(context, args.concat(bindArgs))
  }
}

var res = obj.fn.MyBind(window, 'ccc', 'ddd')

console.log(res('eee'))