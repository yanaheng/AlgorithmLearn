// 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
// 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
// 你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。


/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  // 原生api
  // s.reverse()

  // 双指针
  for(let left = 0, right = s.length-1; left < right; left++, right--){
    [s[left], s[right]] = [s[right], s[left]]
  }
};

var test = ['h','e','l','l','o']
reverseString(test)
console.log(test)


// 时间复杂度：O(n)
// 空间复杂度：O(1)
// 链接：https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnhbqj/