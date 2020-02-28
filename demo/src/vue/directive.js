// 只更新数据变动相关的 DOM，必须有个这样的对象，将DOM节点和对应的数据一一映射起来
/**
 * 指令构造函数
 * @param {*} name 值为 text，代表是文本节点
 * @param {*} el 
 * @param {*} vm 
 * @param {*} expression 指令表达式，例如 name
 */
function Directive (name, el, vm, expression) {
  this.name = name // 指令的名称，对于普通的文本节点来说，值为’text‘
  this.el = el
  this.vm = vm
  this.expression = expression
  this.attr = 'nodeValue'
  this.update()
}

Directive.prototype.update = function () {
  this.el[this.attr] = this.vm.$data[this.expression]
  console.log(`更新了DOM-${this.expression}`)
}

export default Directive
