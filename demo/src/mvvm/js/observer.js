function observe(data) {
  if (!data || typeof data !== 'object') {
    return;
  }

  Object.keys(data).forEach(function (key) {
    defineReactive(data, key, data[key]);
  })
}

function defineReactive(data, key, val) {
  // Todo 如果val是对象，监听val
  var dep = new Dep();
  var childObj = observe(val);
  
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: false,
    get: function () {
      if (Dep.target) {
        dep.depend()
      }
      // Dep.target && dep.addSub(Dep.target);
      return val;
    },
    set: function (newVal) {
      if (val === newVal) return;
      val = newVal;

      childObj = observe(newVal)
      dep.notify();
    }
  })
}

var uid = 0

function Dep() {
  this.id = uid++
  this.subs = []
}

Dep.prototype = {
  addSub: function (sub) {
    this.subs.push(sub);
  },
  depend: function () {
    Dep.target.addDep(this)
  },
  notify: function () {
    this.subs.forEach(function (sub) {
      sub.update()
    })
  }
}

Dep.target = null