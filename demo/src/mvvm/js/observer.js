function observe (data) {
  if (!data || typeof data !== 'object') {
    return;
  }

  Object.keys(data).forEach(function (key) {
    defineReactive(data, key, data[key]);
  })
}

function defineReactive (data, key, val) {
  // Todo 如果val是对象，监听val
    var dep = new Dep();
    observe(val);
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: false,
      get: function () {
          Dep.target && dep.addSub(Dep.target);
          return val;
      },
      set: function (newVal) {
          if (val === newVal) return;
          console.log(val, ' --> ', newVal);
          val = newVal;
          dep.notify();
      }
  })
}

function Dep () {
    this.subs = []
}

Dep.prototype = {
    addSub: function (sub) {
        this.subs.push(sub);
    },
    notify: function () {
        this.subs.forEach(function (sub) {
            sub.update()
        })
    }
}