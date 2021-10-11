// 更新：2021年8月11日12:16:11
// > 参考：[leetcode使用javascript从一个数组中创建一颗树_Niap的博客-CSDN博客](https://blog.csdn.net/shuangxuyu3220/article/details/106949221)
// 该文件用于根据LeetCode给出的数组，创建出一个符合题意的二叉树

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var createTree = function (nums) {
  var root = new TreeNode(nums[0]);
  var queue = [];
  queue.push(root);
  var cur;
  var lineNodeNum = 2;
  var startIndex = 1;
  var restLength = nums.length - 1;
  while (restLength > 0) {
    for (var i = startIndex; i < startIndex + lineNodeNum; i = i + 2) {
      if (i == nums.length) return root;
      cur = queue.shift();
      if (nums[i] != null) {
        cur.left = new TreeNode(nums[i]);
        queue.push(cur.left);
      }

      if (i + 1 == nums.length) return root;
      if (nums[i + 1] != null) {
        cur.right = new TreeNode(nums[i + 1]);
        queue.push(cur.right);
      }
    }
    startIndex += lineNodeNum;
    restLength -= lineNodeNum;
    lineNodeNum = queue.length * 2;
  }
  return root;
};