class Router {
  constructor () {
    this.routes = {}

    // 在初始化时监听popstate事件
    this._bindPopState()
  }

  init (path) {
    history.replaceState({ path: path}, null, path)
    this.routes[path] && this.routes[path]()
  }

  route (path, callback) {
    this.routes[path] = callback || function () {}
  }

  go (path) {
    history.pushState({ path: path }, null, path)
    this.routes[path] && this.routes[path]()
  }

  _bindPopState () {
    window.addEventListener('popstate', e => {
      const path = e.state && e.state.path
      this.routes[path] && this.routes[path]()
    })
  }
}

const router = new Router()
router.init(location.pathname)

const content = document.querySelector('body')
const ul = document.querySelector('#history')

function changeBgColor (color) {
  content.style.backgroundColor = color
  return color
}

router.route('/', function () {
  changeBgColor('red')
})

router.route('/blue', function () {
  changeBgColor('blue')
})

router.route('/green', function () {
  changeBgColor('green')
})

ul.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    e.preventDefault();
    router.go(e.target.getAttribute('href'))
  }
})
