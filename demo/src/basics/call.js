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
