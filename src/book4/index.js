console.log(window.ADS)
var element = ADS.$('content')
var element2 = ADS.$(document.getElementById('content'))
element.innerText = '微微么么哒'

var ul = ADS.$('name')
var lis = ADS.getElementsByClassName('item', 'li', ul)

function registerListener (anchor, num) {
  ADS.addEvent(anchor, 'click', function () {
    console.log(num)
  })
}

function initAnchors () {
  for (var i=1; i<=3; i++) {
    var anchor = lis[i-1];
    // registerListener(anchor, i)
    (function(num){
      ADS.addEvent(anchor, 'click', function () {
        console.log(num)
      })
    })(i)
  }
}
initAnchors()