// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {};
    for (let i = 0; i< nums.length; i++) {
        map[target -nums[i]] = i;
    }
    for (let i =0; i< nums.length; i++) {
        if (map[nums[i]] !== undefined && map[nums[i]] !== i) {
            return [i, map[nums[i]]];
        }
    }
    return null;
};
