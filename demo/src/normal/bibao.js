// 为了测试模块相关知识 以及 闭包
(function () {
  var a = 10;
  var b = 20;

  function add (num1, num2) {
    var num1 = num1 || a
    var num2 = num2 || b

    return num1 + num2
  }
  
  // 将引用保存在外部执行环境的变量中，形成闭包，防止该执行环境被垃圾回收
  // window.add = add
})();

// add(10, 20)

/*--------------------------------------------------------------------------------------------------------*/

// 用闭包来解决每次输出的i都不一样的问题
for (var i=1; i<=5; i++) {
  (function(i) {
    setTimeout(function timer() {
      // console.log(i)
    }, i*1000)
  })(i)
}

/*--------------------------------------------------------------------------------------------------------*/

// 手写bind方法
Function.prototype.bind = function (obj) {
  var fn = this
  return function () {
    return fn.call(obj, arguments)
  }
}

var obj = {
  a: 20,
  getA: function () {
    setTimeout(function () {
      // console.log(this.a)
    }.bind(this), 1000)
  }
}

obj.getA()

/*--------------------------------------------------------------------------------------------------------*/

// 函数式编程
function getNumbers (arr) {
  return arr.filter(function (item) {
    return typeof item === 'number'
  })
}

var array = [1, 3, 'h', 5, 'm', '4'];
// console.log(getNumbers(array))

/*--------------------------------------------------------------------------------------------------------*/

// 不小心看到的闭包相关题目
function fn (count) {
  return {
    cal: function () {
      return count++
    }
  }
}

var obj = fn(5)
// console.log(obj.cal())
// console.log(obj.cal())
// console.log(obj.cal())

/*--------------------------------------------------------------------------------------------------------*/

// 斐波拉契数列 0, 1，1，2，3，5，8，13, 求第几项
function fabinacci () {
  var cache = [0, 1]

  return function __fabinacci (n) {
    return typeof cache[n] === 'number'
         ? cache[n]
         : cache[n] = __fabinacci(n - 1) + __fabinacci(n - 2)
  }
}

var fb = fabinacci()
fb(10);

/*--------------------------------------------------------------------------------------------------------*/

// 实现一个add方法，使计算结果能够满足如下预期：
// add(1)(2)(3) = 6;
// add(1, 2, 3)(4) = 10;
// add(1)(2)(3)(4)(5) = 15;
(function () {
  function add () {
    var _args = [...arguments]

    var _adder = function () {
      _args.push(...arguments)
      return _adder
    }

    _adder.toString = function () {
      return _args.reduce(function (a, b) {
        return a + b
      })
    }

    return _adder
  }

  var a = add(1)(2)(3)(4);   // f 10
  var b = add(1, 2, 3, 4);   // f 10
  var c = add(1, 2)(3, 4);   // f 10
  var d = add(1, 2, 3)(4);   // f 10
  var e = add(1);   // f 10

  // 可以利用隐式转换的特性参与计算
  // console.log(a + 0); // 20
  // console.log(b + 0); // 20
  // console.log(c + 0); // 20
  // console.log(d + 0); // 20
  // console.log(e + 0); // 20
})()

//比较下面两段代码，试述两段代码的不同之处
// 不同： 执行过程中环境栈不一样
// A--------------------------
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
checkscope();

// B---------------------------
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
checkscope()();

// leetcode上面看到的题目，题目15
var threeSum = function(nums) {
	var rtn = [];
	if (nums.length < 3) {
		return rtn;
	}
	nums = nums.sort(function(a, b) {
		return a - b;
	});
	for (var i = 0; i < nums.length - 2; i++) {
		if (nums[i] > 0) {
			return rtn;
		}
		if (i > 0 && nums[i] == nums[i - 1]) {
			continue;
		}
		for (var j = i + 1, k = nums.length - 1; j < k;) {
			if (nums[i] + nums[j] + nums[k] === 0) {
				rtn.push([nums[i], nums[j], nums[k]]);
				j++;
				k--;
				while (j < k && nums[j] == nums[j - 1]) {
					j++;
				}
				while (j < k && nums[k] == nums[k + 1]) {
					k--;
				}
			} else if (nums[i] + nums[j] + nums[k] > 0) {
				k--;
			} else {
				j++;
			}
		}
	}
	return rtn;
};

// var nums = [-1, 0, 1, 2, -1, -4]
// var nums = []
// var nums = [13,11,-3,-1,6,-11,-11,-12,1,-11,-10,12,3,-11,0,9,3,-13,-10,-2,6,14,9,-4,-9,-3,-9,-15,-10,4,-7,10,1,-3,-5,14,1,-9,-13,-12,-4,-8,7,6,-4,-8,0,6,-14,-3,-11,0,-4,13,3,2,-13,9,2,14,-1,10,10,7,14,12,6,0,-12,0,-5,-9,7,-13,12,10,-13,-3,1,10,9,5,-5,12,-5,13,-1,-11,0,-14,-11,6,3,14,-2,2,11,11,10,6,-4,12,13,10,7,10,5,1]
// var nums = [-1, -1, 2]
// console.log(threeSum(nums))

/*--------------------------------------------------------------------------------------------------------*/

// 完成以下TODO的内容
// add() // 0
// add() // 1
// add() // 2
// add(2) // 4
// add(3) // 7
const add = function () {
  // TODO;
  var count = -1;
  
  return function () {
    return arguments[0] ? count += arguments[0] : ++count
  }
}()
// console.log(add())
// console.log(add())
// console.log(add())
// console.log(add(2))
// console.log(add(3))

/*-------每次循环都产生一个异步操作-------------------------------------------------------------------------------------------------*/
const tasks = [];
const output = function (i) {
  return new Promise(function(resolve, reject) {
    setTimeout(function () {
      console.log(new Date, i)
      resolve()
    }, 1000 * i)
  })
}

for (var j = 0; j < 5; j++) {
  tasks.push(output(j))
}

Promise.all(tasks).then(() => {
  setTimeout(() => {
    console.log(new Date, j)
  }, 1000)
})

// async/await
// 模拟其他语言中的 sleep，实际上可以是任何异步操作
const sleep = (timeountMS) => new Promise((resolve) => {
  setTimeout(resolve, timeountMS);
});

(async () => {  // 声明即执行的 async 函数表达式
  for (var i = 0; i < 5; i++) {
      await sleep(1000);
      console.log(new Date, i);
  }

  await sleep(1000);
  console.log(new Date, i);
})();

setTimeout(function() {
  console.log(a);
}, 0);

var a = 10;

console.log(b);
console.log(fn1);

var b = 20;

function fn1() {
  setTimeout(function() {
      console.log('setTImeout 10ms.');
  }, 10);
}

fn1.toString = function() {
  return 30;
}

console.log(fn1);

setTimeout(function() {
  console.log('setTimeout 20ms.');
}, 20);

fn1();

/* ---- */
function F () {
  function C () {
    console.log(this)
    return this
  }

  return C()
}

var o = new F()


function c () {
  this.a = 1
  return false
}

console.log(typeof new c())

var arr = [1, 2, [1, 2]]
arr.sort()
arr.join('--')
console.log(arr)

function MyString (str) {
  this.str = str
  this.length = str.split('').length
}

MyString.prototype.toString = function () {
  return this.str
}

MyString.prototype.value = function () {
  return this.str
}

var str = new MyString('hello')
console.log(str.length)
console.log(str.toString())