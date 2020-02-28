let vm = new Vue({
  el: '#app',
  data: {
    msg: 'hello world',
    obj: {
      name: 'shirley',
      age: 18
    }
  },
  methods: {
    sayHi () {
      alert(this.msg)
    },

    editMsg () {
      this.msg = 'i am new world'
      this.sayHi()
    }
  }
})
console.log(vm)

// vm.msg = '我是第一次修改后的msg'