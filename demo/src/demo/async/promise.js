// 简易promise实现
class MyPromise {
  constructor (executor) {
    let self = this
    self.value = ''
    self.reason = ''
    self.status = 'pending'
    self.onResolvedCallbacks = [] // 存放异步操作
    self.onRejectedCallbacks = []

    function resolve (value) {
      if (self.status === 'pending') {
        self.value = value
        self.status = 'resolved'
        self.onResolvedCallbacks.forEach(fn => fn())
      }
    }

    function reject (reason) {
      if (self.status === 'pending') {
        self.reason = reason
        self.status = 'rejected'
        self.onRejectedCallbacks.forEach(fn => fn())
      }
    }

    try {
      executor(resolve, reject)
    } catch (error) {
      // 出错时直接告诉错误
      reject(error)
    }
  }
  // 方法在原型上
  then (onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val
    onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err }

    let self = this
    let promise2
    promise2 = new MyPromise((resolve, reject) => {
      if (self.status === 'resolved') {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value) // then中执行完返回的结果
            // 根据promiseA+规范，我们应该提供一个函数来处理promise2
            // 我个人的理解是，then中不管是成功回调还是失败回调，其返回值，有可能是promise，有可能是普通值，也有可能是抛出错误
            // 那么我们就需要一个函数来处理这几种不同的情况
            // 这个函数我们就声明为resolvePromise
            resolvePromise(promise2, x, resolve, reject)
            // 这里的promise2就是当前的promise2，x则是执行then中成功回调的返回结果，如果成功调用promise2的reslove，失败调用reject
          } catch (e) {
            reject(e)  // 注意这里的reject是promise2的reject
          }
        }, 0)
      }
  
      if (this.status === 'rejected') {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0)
      }
  
      // 当new Promise中有异步操作，执行then时，状态为pending
      if (this.status === 'pending') {
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value)
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          })
        }, 0)
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason)
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          }, 0)
        })
      }
    })

    return promise2
  }

  catch (onRejected) {
    return this.then(null, onRejected)
  }
}

MyPromise.reject = function(reason) {
  return new MyPromise((resolve, reject) => {
    reject(reason)
  })
}

MyPromise.resolve = function(reason) {
  return new MyPromise((resolve, reject) => {
    resolve(reason)
  })
}

MyPromise.all = function (promises) {
  return new Promise((resolve, reject) => {
    let arr = []
    let i = 0
    function processData (index, data) {
      arr[index] = data
      if (++i === promises.length) {
        resolve(arr)
      }
    }

    for (let i = 0; i < promises.length; i++) {
      promises[i].then((data) => {
        processData(i, data)
      }, reject)
    }
  })
}

MyPromise.race = function(promises){ // promises 是一个数组
  return new Promise((resolve,reject)=>{
      for(let i = 0;i < promises.length;i++){ 
          promises[i].then(resolve,reject) // 和上面Promise.all有点类似
      }
  })
}


/**
 *  1、声明一个resolvePromise函数
 *  这个函数非常核心，所有的promise都遵循这个规范，所有的promise都可用
 * 
 * @prarm promise2   then的返回值，返回新的promise
 * @param x   then中成功函数或者失败函数的返回值
 * @param resolve  promise2的resolve
 * @param reject  promise2的reject
 **/
function resolvePromise (promise2, x, resolve, reject) {
  // 3 自己不能等于自己
  if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise'))
  }

  let called
  // 4 因为then中的返回值可以为promise，当x为对象或者函数，才有可能返回的是promise
  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    // 8
    try {
      // 6 因为当x为promise的话是存在then方法的
      // 但是当我们取一个对象上的属性，也有可能存在异常
      let then = x.then
      // 9.我们为什么在这里用call呢？解决了什么问题呢？可以看上面的第10步
      // x可能还是个promise，那么就让这个promise执行
      // 但是还是存在一个恶作剧的情况，就是{then:{}}
      // 此时需要新增一个判断then是否函数
      if (typeof then === 'function') {
        then.call(x, (y) => {
          if (called) return
          called = true
          resolvePromise(promise2, y, resolve, reject)
        }, (err) => {
          if (called) return
          called = true
          reject(err)
        })
      } else {
        resolve(x)
      }

    } catch (e) {
      if (called) return
      called = true
      reject(e)
    }
  } else {
    // 5 x为常量，则直接成功
    resolve(x)
  }
}

let promise = new MyPromise(function (resolve, reject) {
  // setTimeout(() => {
    resolve('bbb')
  // }, 3000)
})

var promise2 = promise.then((data) => {
  console.log('success: ' + data)
  throw new Error('error')
  return data + 'over'
})
.catch((err)=>{
  console.log(err) // Error:出错了   报错
})
// .then((data) => {
//   console.log(data)
// })
