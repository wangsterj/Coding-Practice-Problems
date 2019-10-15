//Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

//The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

//You may assume the integer does not contain any leading zero, except the number 0 itself.
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let ones = digits[digits.length-1];
  let result = [];
  let add = false;
  let current;
  for (let i = digits.length -1; i>=0; i--) {
      if (add || i === digits.length - 1) {
          current = 1;
      } else {
          current = 0;
      }
      current += digits[i];
      if (current === 10) {
          add = true;
          current = 0;
      } else {
          add = false;
      }
      result.unshift(current);
  }
  if (add) {
      result.unshift(1);
  }
  return result;
};