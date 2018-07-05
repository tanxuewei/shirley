/*
* @description:  demo公用类
* @author:  Shirley(hztanxuewei@corp.netease.com)
* @createTime:  2017-06-04, 22:04:11
*/
var util = {
  /*
   * 深拷贝
   */
  deepCopy: function (source) {
    var result = {}
    for (var key in source) {
      result[key] = (typeof source[key] === 'object' ? this.deepCopy(source[key]) : source[key])
    }
    return result
  }
}
