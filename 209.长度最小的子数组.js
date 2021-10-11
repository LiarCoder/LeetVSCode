/*
 * @Descripttion: 
 * @version: 
 * @Author: LiarCoder
 * @Date: 2021-09-04 13:45:23
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-09-05 20:22:06
 */
/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let minSubArray = [];
  let minLength = Infinity;
  for (let i = 0; i < nums.length; i++) {
    minSubArray.push(nums[i]);
    while (getArraySum(minSubArray) >= target) {
      // if (getArraySum(minSubArray) === target) {
      minLength = Math.min(minLength, minSubArray.length);
      // }
      minSubArray.shift();
    }
  }
  return minLength === Infinity ? 0 : minLength;

  function getArraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
};
// @lc code=end

