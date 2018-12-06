// 只实现单层，未实现父子路由

class Router {
  constructor (obj) {
    this.mode = obj.mode || 'hash'
    // 以键值对的形式储存路由
    this.routes = {}
    // 当前路由的url
    this.currentUrl = ''
  }

  init () {
    if (this.mode === 'hash') {
      // this.routes['/'] = function () {}  不需要先定义，因为当加载完时路由已经是加载完的
      window.addEventListener('load', this.refresh.bind(this), false)
      window.addEventListener('hashchange', this.refresh.bind(this), false)
    } else {
      window.addEventListener('load', this.loadView.bind(this), false)
      window.addEventListener('popstate', this.historyRefresh.bind(this), false)
    }
  }

  // 将path路径与对应的callback函数储存
  route (path, callback) {
    this.routes[path] = callback || function () {}
  }

  // 刷新
  refresh () {
    this.currentUrl = location.hash.slice(1) || '/'
    this.routes[this.currentUrl]()
  }
}

const router = new Router({ mode: 'hash' })
router.init()

var content = document.querySelector('body')

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
