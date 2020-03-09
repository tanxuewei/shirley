/* ------------------- */
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

function sum (nums, target) {
  let temp = []
  for (let i = 0, len = nums.length; i < len; i++) {
    let dif = target - nums[i]

    if (temp[dif] != undefined) {
      return [temp[dif], i]
    }

    temp[nums[i]] = i
  }
}

nums = [2, 7, 11, 15], target = 9

console.log(sum(nums, target))

/* ------------------- */
// 178 - 1
//输入：nums = [8,1,2,2,3]
//输出：[4,0,1,1,3]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  let result = []
  let numsNew = [...nums].sort((a, b) => a - b) // 1 2 3 8
  nums.forEach(item => {
    for (let j = 0, len1 = numsNew.length; j < len1; j++) {
      let item1 = numsNew[j]
      if (item === item1) {
        if (item1 === numsNew[j - 1]) {
          result.push(j - 1)
          return
        } else {
          result.push(j)
          return
        }
      }
    }
  })
  return result
};

var nums = [8,1,2,2,3]
// let nums = [6,5,4,8]
// let nums = [7,7,7,7]
// console.log(smallerNumbersThanCurrent(nums))

// 178 - 2
var rankTeams = function(votes) {
  if (votes.length < 2) return votes

  let teamResult = {}
  let result = []
  let resultStr = []
  votes.forEach(item => {
    let itemArr = item.split('')

    itemArr.forEach((item1, index1) => {
      let i = index1 + 1
      if (teamResult[item1]) {
        if (teamResult[item1][i]) {
          teamResult[item1][i]++
        } else {
          teamResult[item1][i] = 1
        }
      } else {
        teamResult[item1] = []
        teamResult[item1][i] = 1
      }
    })
  })

  // 排序
  for (let key in teamResult) {
    result.push({ [key]: teamResult[key]})
  }

  result.forEach(item => {
    
    result.forEach(item1 => {
    })
  })

  return result
};

let votes = ["ABC","ACB","ABC","ACB","ACB"]
// console.log(rankTeams(votes))

/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
  var str = 'abcdefghigklmnopqrstuvwxyz'
  var strList = str.split('')
  var result = []
  var resultStr = ''

  if (n === 1) return 'a'

  if (n % 2 === 0) {
    result = [n - 1, 1]
  } else {
    result = [n - 2, 1, 1]
  }

  result.forEach((item, index) => {
    var innerStr = strList[index]
    for (var i = 0; i < item; i++) {
      resultStr += innerStr
    }
  })

  return resultStr
};

// console.log(generateTheString(121))

/**
 * @param {number[]} light
 * @return {number}
 */

var numTimesAllBlue = function(light) {
  var result = 0
  
  light.forEach((item, index) => {
    var flag = false
    for (var j = 0; j <= index; j++) {
      if (light[j] > index + 1) {
        flag = true
        break
      }
    }
    if (!flag) {
      result++
    }
  })

  return result
};

// var light = [2,1,3,5,4]
// var light = [3,2,4,1,5]
// var light = [4,1,2,3]
var light = [1,2,3,4,5,6]

console.log(numTimesAllBlue(light))
