;
(function () {
  function Drag (selector) {
    this.elem = typeof selector == 'object' ? selector : document.querySelector(selector)
    this.startX = 0;
    this.startY = 0;

    this.sourceX = 0;
    this.sourceY = 0;

    this.init()
  }

  Drag.prototype = {
    constructor: Drag,
    init: function () {
      this.setDrag()
    },
    // 该方法用来绑定事件
    setDrag: function() {
      var self = this;
      this.elem.addEventListener('mousedown', start, false);
      function start(event) {
          self.startX = event.pageX;
          self.startY = event.pageY;

          var pos = self.getPosition();

          self.sourceX = pos.x;
          self.sourceY = pos.y;

          document.addEventListener('mousemove', move, false);
          document.addEventListener('mouseup', end, false);
      }

      function move(event) {
          var currentX = event.pageX;
          var currentY = event.pageY;

          var distanceX = currentX - self.startX;
          var distanceY = currentY - self.startY;

          self.setPostion({
              x: (self.sourceX + distanceX).toFixed(),
              y: (self.sourceY + distanceY).toFixed()
          })
      }

      function end(event) {
          document.removeEventListener('mousemove', move);
          document.removeEventListener('mouseup', end);
          // do other things
      }
    },
    getStyle: function(property) {
        // 低版本ie通过currentStyle来获取元素的样式，其他浏览器通过getComputedStyle来获取
        return document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(this.elem, false)[property] : this.elem.currentStyle[property];
    },
    getTransform: function() {
        var transform = '',
            divStyle = document.createElement('div').style,
            transformArr = ['transform', 'webkitTransform', 'MozTransform', 'msTransform', 'OTransform'],
    
            i = 0,
            len = transformArr.length;
    
        for(; i < len; i++)  {
            if(transformArr[i] in divStyle) {
                return transform = transformArr[i];
            }
        }
    
        return transform;
    },
    getPosition: function() {
        var pos = {x: 0, y: 0};
        var transform = this.getTransform();
        // transform = false;
        if(transform) {
            var transformValue = this.getStyle(transform);
            if(transformValue == 'none') {
                this.elem.style[transform] = 'translate(0, 0)';
                return pos;
            } else {
                var temp = transformValue.match(/[0-9,\s\.]+/)[0].split(',');
                return pos = {
                    x: parseInt(temp[4].trim()),
                    y: parseInt(temp[5].trim())
                }
            }
        } else {
            if(this.getStyle('position') == 'static') {
                this.elem.style.position = 'relative';
                return pos;
            } else {
                var x = parseInt(this.getStyle('left') ? this.getStyle('left') : 0);
                var y = parseInt(this.getStyle('top') ? this.getStyle('top') : 0);
                return pos = {
                    x: x,
                    y: y
                }
            }
        }
    },
    // pos = { x: 200, y: 100 }
    setPostion: function(pos) {
        var transform = this.getTransform();
        if(transform) {
            this.elem.style[transform] = 'translate('+ pos.x +'px, '+ pos.y +'px)';
        } else {
            this.elem.style.left = pos.x + 'px';
            this.elem.style.top = pos.y + 'px';
        }
    }
  }

  window.Drag = Drag
})();
// var oElem = document.getElementById('target');
// var drag = new Drag(oElem)

;(function ($){
  $.fn.extend({
    becomeDrag: function () {
      new Drag(this[0]);
      return this;  // 注意：为了保证jQuery所有的方法都能够链式访问，每一个方法的最后都需要返回this，即返回jQuery实例
    }
  })
})(jQuery)

$('#target').becomeDrag()
