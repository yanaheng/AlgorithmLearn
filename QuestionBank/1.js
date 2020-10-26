// 给定一个整数数组nums和一个目标值target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案，但是，数组中同一个元素不能使用两遍。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  //  方法一
  // indexOf方法，实际相当于一层遍历，因此时间复杂度O(n^2)
  // for(let i = 0; i < nums.length; i++){
  //   const minusNum = target - nums[i];
  //   const minusIndex = nums.lastIndexOf(minusNum);
  //   if(minusIndex>i){
  //     return [i, minusIndex];
  //   }
  // }


  // 方法二
  // 时间复杂度O(n)
  const prevNums = {};                    // 存储出现过的数字，和对应的索引               
  for (let i = 0; i < nums.length; i++) { // 遍历元素   
    const curNum = nums[i];               // 当前元素   
    const targetNum = target - curNum;    // 满足要求的目标元素   
    const targetNumIndex = prevNums[targetNum]; // 在prevNums中获取目标元素的索引
    if (targetNumIndex !== undefined) {   // 如果存在，直接返回 [目标元素的索引,当前索引]
      return [targetNumIndex, i];
    } else {                              // 如果不存在，说明之前没出现过目标元素
      prevNums[curNum] = i;               // 存入当前的元素和对应的索引
    }
  }
};

console.log(twoSum([3,3], 6));