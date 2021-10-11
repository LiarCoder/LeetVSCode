/*
 * @Descripttion: 
 * @version: 
 * @Author: LiarCoder
 * @Date: 2021-09-23 14:56:53
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-09-23 20:30:37
 */
/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = ' ' + s + ' ';;
  let front = 0;
  // let back = 0;
  let words = [];
  for (let back = 0; back < s.length; back++) {
    // if (i === 0 && s[0] !== ' ') {
    //   front = 0;
    //   continue;
    // }
    if (s[back] === ' ' && s[back + 1] !== ' ') {
      front = back + 1;
    }
    if (s[back] !== ' ' && s[back + 1] === ' ') {
      // back = i;
      words.unshift(s.substring(front, back + 1));
    }
  }
  return words.join(' ');
};
console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  the sky is     blue"));
console.log(reverseWords("a good   example"));
console.log(reverseWords("  Bob    Loves  Alice   "));
console.log(reverseWords("Alice does not even like bob"));
// @lc code=end