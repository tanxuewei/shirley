var users = [
  {
    id: 1,
    name: "a"
  },
  {
    id: 2,
    name: "a"
  },
  {
    id: 3,
    name: "b"
  },
  {
    id: 4,
    name: "v"
  }
]
Array.prototype.unique = function () {
  // let names = this.map((item) => item.name)
  // return [...new Set(names)]
  let names = Array.from(this, (item) => item.name)
  return [...new Set(names)]
}

// console.log(users.unique())

var obj = {
  a: 1,
  b: 2,
  c: {
    name: 'malimalihong'
  }
}

function simpleCopy (obj) {
  let result = {}
  for (let key in obj) {
    result[key] = obj[key]
  }
  return result
}

function deepCopy (obj) {
  let result = {}
  for (let key in obj) {
    let item = obj[key]
    result[key] = typeof item === 'object' ? deepCopy(item) : item
  }
  return result
}

// var newObj = simpleCopy(obj)
var newObj = deepCopy(obj)
obj.a = 3
newObj.a // 1

obj.c.name = 'new'
newObj.c.name // 'new'
