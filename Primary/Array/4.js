// 给定一个整数数组，判断是否存在重复元素。
// 如果任意一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  var hashMap = {};
  for(let i = 0; i < nums.length; i++){
    if(hashMap[nums[i]] !== undefined){
      return true
    }
    hashMap[nums[i]] = i
  }
  return false
};
console.log(containsDuplicate([1,2,3,1]))

// 时间复杂度：O(n)
// 链接：https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x248f5/