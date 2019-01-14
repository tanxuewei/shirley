var data = { name: 'shirley', age: 20 }

class Dep {
  constructor () {
    this.subs = new Set()
  }

  addSub (sub) {
    this.subs.add(sub)
  }

  notify () {
    this.subs.forEach(sub => sub.update())
  }
}

Dep.target = null

// 用来添加订阅者的
class Watcher {
  constructor (data, key, fn) {
    this.data = data
    this.key = key
    this.cb = fn
    this.value = this.get()
  }

  get () {
    Dep.target = this
    var value = this.data[this.key]  // 这里会触发属性的getter，从而添加订阅者
    Dep.target = null
    return value
  }

  update () {
    this.run()
  }

  run () {
    var value = this.get(); //TODO 重新获取新值，但是会重复加依赖？为什么不直接获取值就好了，为什么一定要执行get方法呢？一会看下怎么处理的
    var oldVal = this.value;
    if (value !== oldVal) {
      this.value = value;
      this.cb(value)
      // this.cb.call(this.vm, value, oldVal); // 执行compile中绑定的回调，更新视图
    }
  }
}

function observe (data) {
  if (!data || typeof data !== 'object') return

  Object.keys(data).forEach(key => {
    defineReactive(data, key, data[key])
  })
}

function defineReactive (data, key, val) {
  var dep = new Dep()
  observe(val) // 监听子属性
  Object.defineProperty(data, key, {
    get () {
      // 由于需要在闭包内添加watcher. 所以通过Dep定义一个全局target属性，暂存watcher，添加完移除
      // 或许也是为了全局定义watcher方便加，因为加watcher会先给target赋值，然后再调用数据的get放方法）
      Dep.target && dep.addSub(Dep.target)
      return val
    },

    set (newVal) {
      if (newVal === val) return
      val = newVal
      // 一旦变化了通知所有订阅者
      dep.notify()
    }
  })
}

observe(data)

// 绑定watcher触发get】、
new Watcher(data, 'name', function (val) {
  console.log('我变了么' + val)
})
// set
data.name = 'sb'
