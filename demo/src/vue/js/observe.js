function Observer(data) {
  this.data = data
  this.walk(data)
}

let p = Observer.prototype

// 深层遍历对象的各个属性
// 采用的是递归的思路
// 因为我们要为对象的每一个属性绑定getter和setter
p.walk = function (obj) {
  let val
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      val = obj[key]

      if (typeof val === 'object') {
        new Observer(val)
      }
      this.convert(key, val)
    }
  }
}

// 因为闭包，所以 val 一直存在
p.convert = function (key, val) {
  Object.defineProperty(this.data, key, {
    get () {
      console.log('你访问了' + key)
      return val
    },
    set (newVal) {
      console.log('你设置了' + key)
      console.log('新的' + key + ' = ' + newVal)

      if (newVal === val) return
      val = newVal
    }
  })
}

let data = {
  msg: 'hello world',
  user: {
    name: 'shirley',
    age: 18
  },
  list: []
}
let app = new Observer(data)
// data.msg = 'new msg'
// data.user.age = 19
// data.user.home = 'hz'
// data.list.push(2)
// console.log(data)