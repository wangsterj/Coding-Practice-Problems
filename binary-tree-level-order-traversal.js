//Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (root===null) {
      return [];
  }
  let result = [];
  function helper(root, depth) {
      if (root === null) {
          return;
      }
      if (result[depth] === undefined ) {
          result[depth] = [];
      }
      result[depth].push(root.val);
      helper(root.left, depth + 1);
      helper(root.right, depth + 1);
  }
  helper(root, 0);
  return result.reverse();
};