// 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums, j=0) {
  // 方式一
  // var j = 0;
  // for(var i = 0; i < nums.length; i++){
  //     if(nums[i] !== nums[j]){
  //          j ++;
  //         nums[j] = nums[i]
  //     }
  // }
  // console.log(nums)
  // return j + 1

  // 方式二
  // return nums.forEach((_, i) => i !== 0 && nums[i] !== nums[j] && ++j && (nums[j] = nums[i])) || j + 1

  // 方式三
  var j = 0;
  for(var i = 1; i < nums.length; i++){
    if(nums[i] !== nums[i-1]){
      nums[i-j] = nums[i]
    }else{
      j++
    }
  }
  return nums.length - j
};

console.log(removeDuplicates([1,1,2]))

// 时间复杂度：O(n)
// 空间复杂度：O(1)
// 链接：https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2gy9m/