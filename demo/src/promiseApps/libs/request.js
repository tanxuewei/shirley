define(function(require) {
  var API = require('API');
  var $ = require('jquery')

  // 因为jQuery中的get方法也是通过Promise进行了封装，最终返回的是一个Promise对象，因此这样我们就可以将数据请求与数据处理放在不同的模块
  // 这样我们就可以使用一个统一的模块来管理所有的数据请求

  // 获取当天的信息
  getDayInfo = function () {
    return $.get(API.dayInfo)
  }

  getTypeInfo = function () {
    return $.get(API.typeInfo)
  }

  getUser = function (callback) {
    return $.get(API.dayInfo, callback)
  }

  return {
    getDayInfo: getDayInfo,
    getTypeInfo: getTypeInfo,
    getUser: getUser
  }
})