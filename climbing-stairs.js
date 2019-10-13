//You are climbing a stair case. It takes n steps to reach to the top.

//Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let count = {};
  count[0] = 0;
  count[-1] = 0;
  count[1] = 1;
  count[2] = 2;
  function helper (n) {
      if (count[n] !== undefined) {
          return count[n];
      } else {
          let currCount = helper(n - 1) + helper(n - 2);
          count[n] = currCount;
          return count[n];
      }
  }
  return helper(n);
};