/*
 * @Descripttion:
 * @version:
 * @Author: LiarCoder
 * @Date: 2021-09-25 00:29:27
 * @LastEditors: LiarCoder
 * @LastEditTime: 2021-09-25 00:39:08
 */

// Definition for a Node.
function Node(val, children) {
  this.val = val;
  this.children = children;
};

function createMultiBranchTree(arr) {
  if (!arr.length) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    const node = arr[i];
    // 写到这里好像就写不下去了，因为从第三层开始，
    // 就无法根据arr中的分布判断该节点到底是哪个节点的子节点
  }
}