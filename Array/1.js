/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var j = 0;
  for(var i = 0; i < nums.length; i++){
      if(nums[i] !== nums[j]){
           j ++;
          nums[j] = nums[i]
      }
  }
  return j + 1
};

// 时间复杂度：O(n)
// 空间复杂度：O(1)

// 链接 https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2gy9m/