/*
更新：2021年8月13日16:40:31
> 参考：[代码随想录](http://programmercarl.com/%E8%83%8C%E5%8C%85%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%8001%E8%83%8C%E5%8C%85-1.html#其他语言版本)
*/

// 代码随想录里提供的JavaScript代码（使用二维dp数组）
function testWeightBagProblem(wight, value, size) {
  const len = wight.length,
    dp = Array.from({ length: len + 1 }).map(
      () => Array(size + 1).fill(0)
    );

  for (let i = 1; i <= len; i++) {
    for (let j = 0; j <= size; j++) {
      if (wight[i - 1] <= j) {
        dp[i][j] = Math.max(
          dp[i - 1][j],
          value[i - 1] + dp[i - 1][j - wight[i - 1]]
        )
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  //   console.table(dp);

  return dp[len][size];
}

// 代码随想录里提供的JavaScript代码（使用一维dp数组）
function testWeightBagProblem2(wight, value, size) {
  const len = wight.length,
    dp = Array(size + 1).fill(0);
  for (let i = 1; i <= len; i++) {
    for (let j = size; j >= wight[i - 1]; j--) {
      dp[j] = Math.max(dp[j], value[i - 1] + dp[j - wight[i - 1]]);
    }
  }
  return dp[size];
}


// function test() {
//   console.log(testWeightBagProblem([1, 3, 4, 5], [15, 20, 30, 55], 6));
// }

// test();

// 我根据代码随想录里提供的JavaScript代码（二维数组版）进行改动的版本
/**
 * 这个改动与上面原版的区别就在于下面的初始化和博主提供的PDF中所叙述的思路是完全相对应的
 * 而且在调试控制台也可以发现，上面的代码中将dp数组初始化为【4行x5列】的二维数组，
 * 且全部元素都被初始化为0，而下面的程序则将dp数组按照博主提供的相关思路解析中所描述的
 * 被初始化成了【3行x5列】的二维数组，且特意按照思路描述将该数组的第一行和第一列分开进行了初始化，
 * 所以，这也导致后续的双重for循环遍历操作中的状态转移公式中的数组下标和文档中的描述更对得上
 * 总的来说就是下面的程序更能准确地贴合博主的描述，当然他原本提供的程序也是完全没问题的，而且
 * 也更简洁，但是可能会稍稍不利于我们初学者完全根据文档描述进行一一对应的理解。
 */
//#region 
function testWeightBagProblem(weight, value, size) {
  let dp = Array.from({ length: weight.length }).fill([]);

  for (let j = 0; j < weight[0]; j++) {
    dp[0][j] = 0;
  }
  for (let j = weight[0]; j <= size; j++) {
    dp[0][j] = value[0];
  }

  for (let i = 1; i < weight.length; i++) {
    for (let j = 1; j <= size; j++) {
      if (weight[i] <= j) {
        dp[i][j] = Math.max(
          dp[i - 1][j],
          value[i] + dp[i - 1][j - weight[i]]
        )
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[weight.length - 1][size];
}
//#endregion

console.log(testWeightBagProblem([1, 3, 4], [15, 20, 30], 4));