function test(type) {
  return new Promise((resolve, reject) => {
    resolve(type)
  })
}

// var p1 = test(1).then(result => {
//   console.log(result)
//   return result
// }).then((data) => {
//   console.log(data)
// })

// let arr = [test(1), test(2), test(3)]


// arr.reduce((preview, current) => {
//   return preview.then( result => {
//     console.log(result)
//     return current
//   })
// })

if (!Promise.map) { 
  Promise.map = function (vals, cb) { 
    return Promise.all(vals.map(function (val) {
       return new Promise(function (resolve) { 
         cb(val, resolve); 
        }); 
      })); 
    }; 
  }


// 1
const promise = new Promise((resolve, reject) => {
  console.log(1);
  resolve();
  console.log(2);
});
promise.then(() => {
    console.log(3);
});
console.log(4);