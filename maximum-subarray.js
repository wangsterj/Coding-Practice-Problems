//Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = nums[0];
  let temp = nums[0];
  for (let i = 1; i< nums.length; i++) {
      temp = Math.max(nums[i], nums[i] + temp);
      max = Math.max(max,temp);
  }
  return max;
};