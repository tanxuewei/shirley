'use strict';
;(function () {
  var root = (typeof self == 'object' && self.self == self && self) ||
             (typeof global == 'object' && global.global == global && global) ||
             this ||
             {};

  var _ = function (obj) {
    if (!(this instanceof _)) return new _(obj)
    this._wrapped = obj
  }

  root._ = _

  _.reverse = function (str) {
    return str.split('').reverse().join('')
  }

 
})();

// console.log(_.reverse('hello'))
console.log(_([1, 2, 3]))


/* ---- */

Array.prototype.multiply = function () {
  let arr = this
  
   arr.map((a) => {
    this.push(a*a)
    // return a * a
  })
}

const a = [1, 2, 3, 4, 5]
a.multiply()
console.log(a)
