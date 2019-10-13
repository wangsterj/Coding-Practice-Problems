//Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums === null || nums.length === 0) {
      return null;
  }
  let curr = nums[0];
  let index = 1;
  for (let i = 1; i< nums.length; i++) {
      if (curr !== nums[i]) {
          nums[index] = nums[i];
          curr = nums[i];
          index++;
      }
  }
  while (index !== nums.length) {
      nums.pop();
  }
  return nums.length;
};