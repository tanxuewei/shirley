// 实现一个LazyMan，可以按照以下方式调用:
// LazyMan("Hank")输出:
// Hi! This is Hank!
// 
// LazyMan("Hank").sleep(10).eat("dinner")输出
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~
// 
// LazyMan("Hank").eat("dinner").eat("supper")输出
// Hi This is Hank!
// Eat dinner~
// Eat supper~
// 
// LazyMan("Hank").sleepFirst(5).eat("supper")输出
// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper
function log (msg) {
  console.log(msg);
}
var taskList = []
function LazyMan () {
  
}
LazyMan.prototype.sleep = function (time) {
  subscribe('sleep', function () {
    setTimeout(function(){
      log('Wake up after ' + time)
      publish()
    }, time*1000)
  })
  return this
}
LazyMan.prototype.sleepFirst = function (time) {
  subscribe('sleepFirst', function () {
    setTimeout(function(){
      log('Wake up after ' + time)
      publish()
    }, time*1000)
  })
}

LazyMan.prototype.eat = function (type) {
  subscribe('eat', function () {
    log(type)
    publish()
  })
  return this
}
function subscribe (name, cb) {
  var args = Array.prototype.slice.call(arguments)

  if (args.length < 2) {
    log('必须有两个参数')
    return
  }
  if (name == 'sleepFirst') {
    taskList.unshift({name: name, cb: cb})
  } else {
    taskList.push({name: name, cb: cb})
  }
}

function publish () {
  if (taskList.length === 0) return
  taskList.shift().cb()
}

function lazyman (name) {
  subscribe('lazyman', function () {
    log('Hi! This is ' + name)
    publish()
  })
  setTimeout(publish, 0)
  return new LazyMan()
}

// lazyman('shirley').sleep(3).eat('dinner')
// lazyman('shirley').eat('dinner').eat('hahha')
lazyman('shirley').sleep(3).sleepFirst(5)