// 很重要，后面重点看*****
// 自执行创建模块
(function() {
  // states 结构预览
  // states = {
  //     a: 1,
  //     b: 2,
  //     m: 30,  
  //     o: {}
  // }
  var states = {};  // 私有变量，用来存储状态与数据

  // 判断数据类型
  function type(elem) {
      if(elem == null) {
          return elem + '';
      }
      return toString.call(elem).replace(/[\[\]]/g, '').split(' ')[1].toLowerCase();
  }


  /**
   * @Param name 属性名
   * @Description 通过属性名获取保存在states中的值
  */
  function get(name) {
      return states[name] ? states[name] : '';
  }

  function getStates() {
      return states;
  }

  /*
  * @param options {object} 键值对
  * @param target {object} 属性值为对象的属性，只在函数实现时递归中传入
  * @desc 通过传入键值对的方式修改state树，使用方式与小程序的data或者react中的setStates类似
  */
  function set(options, target) {
    var keys = Object.keys(options)
    var o = target || states;

    keys.map(function (n) {
      if (typeof o[n] === 'undefined') {
        o[n] = options[n]
      } else {
        type(o[n]) === 'object' ? set(options[n], o[n]) : o[n] = options[n]
      }

      return n
    })
  }

  // 对外提供接口
  window.get = get;
  window.set = set;
  window.getStates = getStates;
})()

// 具体使用如下

set({ a: 20 });     // 保存属性a
set({ b: 100 });    // 保存属性b
set({ c: 10 });     // 保存属性c

// 保存属性o, 它的值为一个对象
set({
  o: {
      m: 10,
      n: 20
  }
})

// 修改对象o 的m值
set({
  o: {
      m: 1000
  }
})

// 给对象o中增加一个c属性
set({
  o: {
      c: 100
  }
})

// 给对象o中增加一个c属性
set({
  o: {
      c: 1000
  },
  p : 30
})
console.log(getStates())