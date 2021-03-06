// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
// 说明:
// 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
// 要求使用空间复杂度为 O(1) 的 原地 算法。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  // 
  nums.unshift(...nums.splice(nums.length-k, k))
};

// 时间复杂度：O(n)
// 空间复杂度：O(1)
// 链接：https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2skh7/