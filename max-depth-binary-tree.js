//Given a binary tree, find its maximum depth.
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root === null) {
      return 0;
  }
  let max = 1;
  function helper(root, depth) {
      if (root === null) {
          return;
      } else {
          if (depth > max) {
              max = depth;
          }
          helper(root.left, depth+1);
          helper(root.right, depth+1);
      }
  }
  helper(root, 1);
  return max;
};