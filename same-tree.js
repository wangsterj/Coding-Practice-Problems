//Given two binary trees, write a function to check if they are the same or not.
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (q===null && p===null) {
      return true;
  }
  if (p===null || q===null || p.val !== q.val) {
      return false;
  }
  
  if (p.left === null && q.left === null && p.right === null && q.right === null) {
      return true;
  }
  let result = true;
  if (p.left !== null || q.left !== null) {
      result = result && isSameTree(p.left, q.left);
  }
  if (p.right !== null ||q.right !== null) {
      result = result && isSameTree(p.right, q.right);
  }
  return result;
};