'use strict';
;(function () {
  var root = (typeof self == 'object' && self.self == self && self) ||
             (typeof global == 'object' && global.global == global && global) ||
             this ||
             {};

  var _ = {}

  root._ = _

  _.reverse = function (str) {
    return str.split('').reverse().join('')
  }
})();

console.log(_.reverse('hello'))