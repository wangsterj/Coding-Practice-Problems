//Given a binary tree, find its minimum depth.
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
var minDepth = function(root) {
  if (root === null) {
      return 0;
  }
  let queue =[];
  queue.push({node: root, depth: 1});
  let curr;
  while (queue.length !== 0) {
      curr = queue.shift();
      console.log(curr)
      if (curr.node !== null) {
          if (curr.node.left === null && curr.node.right === null) {
              return curr.depth;
          } else {
              queue.push({node: curr.node.left, depth: curr.depth+1});
              queue.push({node: curr.node.right, depth: curr.depth+1});
          }
      }
  }
};