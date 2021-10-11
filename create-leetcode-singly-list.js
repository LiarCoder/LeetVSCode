// 该文件用于根据LeetCode给出的数组，创建出一个符合题意的单链表

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
let createSinglyList = function (array) {
  let head = new ListNode();
  let cur = head;
  for (let i = 0; i < array.length; i++) {
    let node = new ListNode(array[i]);
    cur.next = node;
    cur = cur.next;
  }
  return head.next;
};