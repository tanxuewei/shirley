// 封装一个get请求方法
function getJSON(url) {
  return new Promise(function (resolve, reject){
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.send()

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          try {
            var response = JSON.parse(xhr.responseText)
            resolve(response)
          } catch (e) {
            reject(e)
          }
        } else {
          reject(new Error(xhr.statusText))
        }
      }
    }
  })
}

var url = './test.json'

getJSON(url).then(resp => console.log(resp))

function renderAll() {
  return Promise.race([getJSON(url), getJSON(url)]);
}

renderAll().then(function(value) {
  // 建议大家在浏览器中看看这里的value值
  console.log(value);
})