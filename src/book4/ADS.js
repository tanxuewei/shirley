(function () {
  if (!window.ADS) { window.ADS = {} }

  function isCompatible (other) { 
    if (other === false 
        || !Array.prototype.push 
        || !Object.hasOwnProperty 
        || !document.createElement
        || !document.getElementsByTagName) {
      return false
    }
    return true
  }
  window.ADS.isCompatible = isCompatible

  function $1 () {
    var elements = []

    // 查找作为参数提供的所有参数
    for (var i = 0, len = arguments.length; i < len; i++) {
      var element = arguments[i]

      // 如果该参数是一个字符串，那假设它是一个id
      if (typeof element === 'string') {
        element = document.getElementById(element)
      }

      // 如果只提供了一个参数，则立即返回这个参数
      if (arguments.length === 1) {
        return element
      }

      elements.push(element)
    }
    return elements
  }
  // prototype框架源码
  function $ (element) {
    if (arguments.length > 1) {
      for (var i = 0, elements = [], len = arguments.length; i < len; i++) {
        elements.push($(arguments[i]))
      }
      return elements
    }
    if (typeof element === 'string') {
      return document.getElementById(element)
    } else {
      // 应该要验证是否为节点
      return element
    }
  }
  window.ADS.$ = $

  function addEvent (node, type, listener) {
    if (!isCompatible()) return
    if (!(node = $(node))) return
    if (node.addEventListener) {
      node.addEventListener(type, listener, false)
      return true
    } else if (node.attachEvent) {
      // MSIE的方法
      node['e' + type + listener] = listener
      node[type + listener] = function () {
        node['e' + type + listener](window.event)
      }
      node.attachEvent('on' + type, node[type + listener])
      return true
    }
    return false
  }
  window.ADS.addEvent = addEvent

  function removeEvent (node, type, listener) {
    if (!(node = $(node))) return
    if (node.removeEventListener) {
      node.removeEventListener(type, listener, false)
      return true
    } else if (node.detachEvent) {
      node.detachEvent('on' + type, node[type + listener])
      node[type + listener] = null
      return true
    }
    return false
  }
  window.ADS.removeEvent = removeEvent

  function getElementsByClassName (className, tag, parent) {
    parent = parent || document
    if (!(parent = $(parent))) return
    // 查找所有匹配的标签
    var allTags = (tag == '*' && parent.all) ? parent.all : parent.getElementsByTagName(tag)
    var matchingElements = []
    // 创建一个正则表达式，来判断className是否正确
    className = className.replace(/\-/g, '\\-')
    var regex = new RegExp('(^|\\s)' + className + '(\\s|$)')
    var element
    // 检查每个元素
    for (var i = 0, len = allTags.length; i < len; i++) {
      element = allTags[i]
      if (regex.test(element.className)) {
        matchingElements.push(element)
      }
    }
    return matchingElements
  }
  window.ADS.getElementsByClassName = getElementsByClassName

  function toggleDisplay (node, value) {
    if (!(node = $(node))) return
    if (node.style.display != 'none') {
      node.style.display = 'none'
    } else {
      node.style.display = value || ''
    }
  }
  window.ADS.toggleDisplay = toggleDisplay

  function insertAfter (node, referenceNode) {
    if (!(node = $(node))) return
    if (!(referenceNode = $(referenceNode))) return
    return referenceNode.parentNode.insertBefore(node, referenceNode.nextsibling)
  }
  window.ADS.insertAfter = insertAfter

  function removeChildren (parent) {
    if (!(parent = $(parent))) return
    while (parent.firstChild) {
      // 不明白parent.firsChild.parentNode 不就是parent么
      parent.firstChild.parentNode.removeChild(parent.firstChild)
    }
    // 再返回父元素，以便实现方法连缀
    return parent
  }
  window.ADS.removeChildren = removeChildren

  function prependChild (parent, newChild) {
    if (!(parent = $(parent))) return
    if (!(newChild = $(newChild))) return
    if (parent.firstChild) {
      parent.insertBefore(newChild, parent.firstChild)
    } else {
      // 如果没有子节点则直接添加
      parent.appendChild(newChild)
    }
    return parent
  }
  window.ADS.prependChild = prependChild
})()