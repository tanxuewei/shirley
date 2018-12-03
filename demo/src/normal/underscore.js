'use strict';
;(function () {
  var root = (typeof self == 'object' && self.self == self && self) ||
             (typeof global == 'object' && global.global == global && global) ||
             this ||
             {};

  var ArrayProto = Array.prototype;
  var push = ArrayProto.push;

  var _ = function (obj) {
    if (obj instanceof _) return obj
    if (!(this instanceof _)) return new _(obj)
    this._wrapped = obj
  }

  if (typeof exports != 'undefined' && !exports.nodeType) {
    if (typeof module != 'undefined' && !module.nodeType && module.exports) {
      exports = module.exports = _
    }
    exports._ =_
  } else {
    root._ = _
  }

  _.VERSION = '0.1'

  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1

  var isArrayLike = function (collection) {
    var length = collection.length
    return typeof length === 'number' && length >=0 && length <= MAX_ARRAY_INDEX
  }

  _.isWindow = function (obj) {
    return obj != null && obj === obj.window
  }

  // 判断类型
  _.checkType = function (obj) {
    var class2type = {}

    'Boolean Number String Function Array Date RegExp Object Error Null Undefined'.split(' ').map(function (item) {
      class2type['[object ' + item + ']'] = item.toLowerCase()
    })

    return function () {
      if (obj == null) return obj + '';
      
      return typeof obj === 'object' || typeof obj === 'function' ?
          class2type[Object.prototype.toString.call(obj)] || 'object' :
          typeof obj
    }
  }()

  _.each = function(obj, callback) {
    var length, i = 0;

    if (isArrayLike(obj)) {
        length = obj.length;
        for (; i < length; i++) {
            if (callback.call(obj[i], obj[i], i) === false) {
                break;
            }
        }
    } else {
        for (i in obj) {
            if (callback.call(obj[i], obj[i], i) === false) {
                break;
            }
        }
    }

    return obj;
  }

  _.isFunction = function (obj) {
    return this.checkType(obj)
  }

  _.functions = function (obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  }

  /**
   * 在 _.mixin(_) 前添加自己定义的方法
   */
  _.reverse = function (str) {
    return str.split('').reverse().join('')
  }

  _.mixin = function (obj) {
    _.each(_.functions(obj), function (name) {
      var func = _[name] = obj[name]

      _.prototype[name] = function () {
        var args = [this._wrapped]
        push.apply(args, arguments)
        return func.apply(_, args)
      }
    })

    return _;
  }

  _.mixin(_)
})();

console.log(_.reverse('hello'))
console.log(_('hello').reverse())
