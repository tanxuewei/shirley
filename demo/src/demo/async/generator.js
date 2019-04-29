function* say () {
  let a = yield 'hello swr1'
  console.log(a)
  let b = yield 'hello swr2'
  console.log(b)
}

let it = say()

console.log(it)

let obj1 = it.next()

console.log(obj1)
console.log(it.next('addd1'))
console.log(it.next('addd2'))