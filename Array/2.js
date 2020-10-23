// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
// 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。


/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {

  // 方法一
  // let sum = 0;
  // for(let i = 0; i < prices.length; i++){
  //   if(prices[i] < prices[i+1]){
  //     sum += prices[i+1] - prices[i]
  //   }
  // }
  // return sum

  // 方法二
  return prices.reduce((cur, prev, index) => index === 0 || prev < prices[index - 1] ? cur : cur + prev - prices[index - 1], 0)
};

console.log(maxProfit([1,2,3,4,5]))


// 时间复杂度：O(n)
// 空间复杂度：O(1)
// 链接：https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2zsx1/