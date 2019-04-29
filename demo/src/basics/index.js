let node = document.getElementById('main')
console.log('我是src引入的js')
node.addEventListener('click', function (e) {
  console.log(e.target)
  console.log(e.currentTarget)
})