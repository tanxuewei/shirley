// 类是My，不是Me
const My = class Me {
  constructor (x, y) {

  }
}

class Point {
  constructor (x, y) {
    this.x = x
    this.y = y
  }
  toString () {
    return x + ', ' + y
  }
}

class colorPoint extends Point {
  constructor (x, y, color) {
    super(x, y)
    this.color = color
  }
  colorToString () {
    return this.color
  }
}

let cp = new colorPoint(25, 8, 'green')
colorPoint.__proto__ == Point  // true
colorPoint.prototype.__proto__ == Point.prototype  // true

class Specification {

}

class JuejinFrontendEnginnerSpecification implements Specification {
  isSatisfiedBy (person) {
    return person.isInteresting() && person.canWriteBUG()
  }
}

class FrontendEngineer {

}
class JuejinFrontendEnginner extends FrontendEngineer {
  constructor (person) {
    super(person)
    this.thingList = [
      'ES6+',
      'Node.js v8+',
      'Vue.js v2.4+',
      'SSR',
      'Chrome (Extension|Headless)',
      'Weixin',
      'Docker',
      // ...,
      'rm -rf /',
      'escape'
    ]
  }
  doSomeInterestingThings () {
    this.thingList.forEach(this.tryToPlay.bind(this))
  }
  tryToPlay () {
    
  }
}

class Shirley extends FrontendEngineer {
  isInteresting () {
    return true
  }
  canWriteBUG () {
    return true
  }
}

const juejinFrontendEnginnerSpecification = new JuejinFrontendEnginnerSpecification()

const you = new Shirley()

if (juejinFrontendEnginnerSpecification.isSatisfiedBy(you)) {
  new JuejinFrontendEnginner(you).doSomeInterestingThings()
}