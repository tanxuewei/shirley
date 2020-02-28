const aryMethods = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse']
const arrayAugmentations = []

aryMethods.forEach(method => {
  let orginal = Array.prototype[method]

  arrayAugmentations[method] = function () {
    // 做监听
    console.log('我被改变啦，越变越美啦')
    return orginal
  }
})

let list = [1, 2, 3]
list.__proto__ = arrayAugmentations
list.push(4)