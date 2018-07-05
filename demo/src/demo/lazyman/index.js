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
(function(window, undefined){
  var taskList = [];

  function subscribe(){
    var param = {},
      args = Array.prototype.slice.call(arguments);

    if (args.length < 1){
      log('参数不能为空');
      return;
    }
    param.msg = args[0];
    param.args = args.slice(1);

    if (param.msg == 'sleepFirst'){
      taskList.unshift(param);
    }else{
      taskList.push(param);
    }
  }

  function log(log){
    console.log(log);
  }
  function LazyMan(){

  }
  LazyMan.prototype.sleep = function(time){
    subscribe('sleep', time);
    return this;
  }
  LazyMan.prototype.sleepFirst = function(time){
    subscribe('sleepFirst', time);
    return this;
  }
  LazyMan.prototype.eat = function(str){
    subscribe('eat', str);
    return this;
  }

  function lazyMan(str){
    log('Hi, This is '+ str + '!');
    publish();
  }

  function eat(str){
    log('Eat ' + str + '~');
    publish();
  }

  function sleep(time){
    setTimeout(function(){
      log("Wake up after " + time);
      publish();
    }, time)
  }

  function sleepFirst(time){
    setTimeout(function(){
      log("Wake up after " + time);
      publish();
    }, time)
  }

  function publish(){
    if (taskList.length>0){
      run(taskList.shift());
    }
  }

  function run (option) {
    var msg = option.msg,
    args = option.args;

    switch(msg){
      case "lazyMan": lazyMan.apply(null, args);break;
      case "eat": eat.apply(null, args);break;
      case "sleep": sleep.apply(null,args);break;
      case "sleepFirst": sleepFirst.apply(null,args);break;
      default:;
    }
  }

  window.lazyMan1 = function(str){
    subscribe('lazyMan', str);
    setTimeout(function(){
      publish();
    }, 0);

    return new LazyMan();
  }

  // lazyMan1("Hank");
  lazyMan1("Hank").sleep(10).eat("dinner")
  // lazyMan1("Hank").sleepFirst(5).eat("supper")
})(window);