const data = {
  a: 1,
  b: {
    c: 3
  }
}

const data1 = {
  name: '霍春阳',
  age: 24
}

function walk () {
  for (const key in data) {
    const dep = []
    let val = data[key]
    const nativeString = Object.prototype.toString.call(val)
    if (nativeString === '[object Object]') {
      walk(val)
    }
    Object.defineProperty(data, key, {
      set (newVal) {
        // 当属性被设置的时候，将“筐”里的依赖都执行一次
        if (newVal === val) return
        val = newVal
        dep.forEach(fn => fn())
      },
      get () {
        console.log('get ' + key)
        dep.push(Target)
        return val
      }
    })
  }
}

walk(data)

let Target = null
// $watch 触发字段的get，收集依赖
function $watch (exp, fn) {
  Target = fn
  let pathArr,
      obj = data

  if (typeof exp === 'function') {
    exp()
    return
  }
  // 检查 exp中是否包含 。
  if（/\./.test(exp)）{
    // 将字符串转为数组，例如 'a.b' => ['a', 'b']
    pathArr = exp.split('.')
    // 使用循环读取到 data.a.b
    pathArr.forEach(p => {
      obj = obj[p]
    })
    return
  }
  data[exp]
}

function render () {
  return document.write(`姓名： ${data.name}; 年龄：${data.age}`)
}

$watch('a', () => {
  console.log('修改了a')
})

$watch('b', () => {
  console.log('修改了b')
})

$watch(render, render)

data.a = 3
console.log(data.a)
// data.b = 5