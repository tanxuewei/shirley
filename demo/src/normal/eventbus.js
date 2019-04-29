class Event {
  constructor () {
    this.types = []
  }
  on (type, cb) {
    this.types[type] = cb || function () {}
  }
  emit (type) {
    this.types[type]()
  }
}

var event = new Event()
event.on('input', function () {
  console.log('xxx')
})

event.emit('input')


class Person {
  constructor () {
    this.state = 'xxx'
  }

  sayHH () {
    console.log(this.state)
  }
}

let p1 = new Person()
console.log(p1)

function P2 () {
  this.state = 'xxx'
}

P2.prototype.sayHH = function () {
  // console.log(this.state)
}

let p2 = new P2()
// console.log(p2)


var list = [{
  id: 1,
  name: 'a'
}, {
  id: 2,
  name: 'a'
}, {
  id: 3,
  name: 'b'
}, {
  id: 4,
  name: 'v'
}]

Array.prototype.unique = function () {
  var res;
  var xxx = this.map((item) => {
    return item.name
  })

  res = Array.from(new Set(xxx))
  // res = [...new Set(xxx)]
  return res
}

console.log(list.unique())

var testList = [3, 2, 4, 5, 1, 3, 4]
Array.prototype.handleNum = function (param) {
  for (let i = 0, len = this.length; i < len; i++) {
    if (i > param) {
      return i
    }
  }
}

console.log(testList.handleNum(4))

function unique (array) {
  var res = []
  for (var i = 0, len = array.length; i < len; i++) {
    var temp = array[i]
    if (res.indexOf(temp) === -1) {
      res.push(temp)
    }
  }

  return res
}

console.log(unique(testList))

function setunique (array) {
  let res = new Set(array)

  return [...res]
}

console.log(setunique(testList))

// filter 排序后去重

function uniqueFilter (arr) {
  return arr.sort().filter((item, index, arr) => {
    // return arr.indexOf(item) === index
    return !index || item != arr[index - 1]
  })
}

console.log('filter')
console.log(uniqueFilter(testList))

function max (arr) {
  return arr.reduce((prev, next) => {
    return Math.max(prev, next)
  })
}

console.log(max(testList))


function debounce(fn, wait) {
  let timer = null

  return function () {
    let context = this
    let args = arguments

    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, wait)
  }
}