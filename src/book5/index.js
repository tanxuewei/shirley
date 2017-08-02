// (function () {
//   function Cat (name) {
//     this.name = name
//     this.times = 3
//   }
//   Cat.prototype.Shout = function () {
//     for (var i = 0; i < this.times.length; i++) {

//     }
//     return this.times
//   }

//   var cat = new Cat('hahahha')
// })()
function Animal () {
  this.specail = '动物'
}
Animal.prototype.shout = function () {
  console.log('hahha')
}

function Cat (name, color) {
  this.name = name
  this.color = color
}
var F = function(){};
F.prototype = Animal.prototype;
Cat.prototype = new F();
Cat.prototype.constructor = Cat;
Cat.prototype.getName = function () {
  console.log('heihei')
}
var cat = new Cat('aa', 'bb')
console.log(cat.shout)
console.log(cat.specail)
console.log(cat.getName)
var f = new F()
console.log(f.getName)


var animal = new Animal()
console.log(animal.shout)
console.log(animal.specail)
console.log(animal.getName)

