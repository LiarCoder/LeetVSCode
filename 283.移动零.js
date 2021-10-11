/*
 * @Descripttion: 
 * @version: 
 * @Author: LiarCoder
 * @Date: 2021-09-27 15:44:06
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-09-27 15:47:29
 */
/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let front = 0;
  for (let back = 0; back < nums.length; back++) {
    if (nums[back] !== 0) {
      [nums[front], nums[back]] = [nums[back], nums[front]];
      front++;
    }
  }
};
let nums = [0,1,0,3,12];
moveZeroes(nums)
console.log(nums);
// @lc code=end

