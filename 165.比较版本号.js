/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let numberArr1 = version1.split('.').map(Number);
    let numberArr2 = version2.split('.').map(Number);
    let diff = numberArr1.length - numberArr2.length;
    let isEqual = true;
    if(diff < 0) {
        for(let i = Math.abs(diff); i > 0; i--) {
            numberArr1.push(0);
        }
    } else {
        for(let i = Math.abs(diff); i > 0; i--) {
            numberArr2.push(0);
        }
    }
    for(let i = 0, length = numberArr1.length; i < length; i++) {
        if(numberArr1[i] > numberArr2[i]) {
            return 1;
            isEqual = false;
        } else if(numberArr1[i] < numberArr2[i]) {
            return -1;
            isEqual = false;
        }
    }
    if(isEqual) {
        return 0;
    }
};
// @lc code=end

