function Watcher (vm, exp, cb) {
  this.cb = cb;
  this.vm = vm;
  this.exp = exp;
  this.depIds = {}
  // 此处为了触发属性的getter，从而在dep添加自己，结合Observer更易理解

  this.getter = this.parseGetter(exp);

  this.value = this.get();
}

Watcher.prototype = {
  update: function () {
    this.run();
  },
  run: function () {
    var value = this.get();
    var oldVal = this.value;
    if (value !== oldVal) {
      this.value = value;
      this.cb.call(this.vm, value, oldVal); // 执行compile中绑定的回调，更新视图
    }
  },
  addDep: function (dep) {
    if (!this.depIds.hasOwnProperty(dep.id)) {
      dep.addSub(this)
      this.depIds[dep.id] = dep
    }
  },
  get: function () {
    Dep.target = this;
    var value = this.getter.call(this.vm, this.vm)
    Dep.target = null;
    return value;
  },

  parseGetter: function(exp) {
    if (/[^\w.$]/.test(exp)) return; 

    var exps = exp.split('.');

    return function(obj) {
        for (var i = 0, len = exps.length; i < len; i++) {
            if (!obj) return;
            obj = obj[exps[i]];
        }
        return obj;
    }
}
}