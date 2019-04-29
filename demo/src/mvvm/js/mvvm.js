function MVVM (options) {
  this.$options = options;
  var data = this._data = this.$options.data, me = this;
  Object.keys(data).forEach(function (key) {
    me._proxy(key);
  })
  observe(data, this);
  this.$compile = new Compile(options.el || document.body, this);
}

MVVM.prototype = {
	_proxy: function(key) {
		var me = this;
    Object.defineProperty(me, key, {
      configurable: false,
      enumerable: true,
      get: function proxyGetter() {
        // return me._data[key];
        console.log('aa')
      },
      set: function proxySetter(newVal) {
        me._data[key] = newVal;
      }
    });
	}
};