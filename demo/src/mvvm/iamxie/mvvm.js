const obj = { name: 'shirley', count: 0 }
render('#app', obj.name)

function render (node, name) {
  var node = document.querySelector(node)
  node.textContent = name
}

class Dep {
  constructor () {
    this.subscribers = new Set()
  }

  // 订阅update函数列表
  depend () {
    if (activeUpdate) {     
      this.subscribers.add(activeUpdate)
    }
  }

  // 所有update函数重新运行
  notify () {              
    this.subscribers.forEach(sub => sub())
  }
}

function observe (obj) {
  Object.keys(obj).forEach(key => {
    let val = obj[key]

    const dep = new Dep()

    Object.defineProperty(obj, key, {
      // 注册订阅者
      get: function () {
        dep.depend()
        return val
      },
      // 通知变化
      set: function (newVal) {
        if (newVal === val) {
          return
        }
        val = newVal
        dep.notify()

        render('#app', newVal)
      }
    })
  })

  return obj
}

observe(obj)

let activeUpdate = null

// 包裹update函数到‘wappedUpdate’函数中
// wrappedUpdate 函数执行时注册和注销自身
function autorun (update) {
  const wrappedUpdate = () => {
    activeUpdate = wrappedUpdate   // 引用赋值给activeUpdate
    update()    // 调用update，即调用内部的dep.depend
    activeUpdate = null
  }
  wrappedUpdate()
}

// wrappedUpdate本质是一个闭包，update函数内部可以获取到activeUpdate变量，同理dep.depend()内部也可以获取到activeUpdate变量，所以Dep的实现就很简单了

autorun(() => {
  // 每次变化时输出的方法
  console.log(obj.count)
})

obj.count++

