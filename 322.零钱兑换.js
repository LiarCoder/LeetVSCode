/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (amount === 0) {
    return 0;
  }
  let pocket = 0;
  coins.sort((a, b) => b - a);
  for (let i = 0; i < coins.length; i++) {
    pocket += Math.floor(amount / coins[i]);
    amount = amount % coins[i];
    console.log(coins[i], pocket, amount);
  }
  if (amount === 0) {
    return pocket;
  }
  return -1;
};
// @lc code=end

