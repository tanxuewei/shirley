console.log('加载了square模块')
import { multiply } from './multiply.js'

var square = function (x) {
  return multiply(x, x)
}

export { square }
