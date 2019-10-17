//Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (s.length === 0) {
      return true;
  }
  let array = [];
  for (let i =0; i<s.length;i++) {
      let ch = s[i];
      if((ch>='A'&&ch<='Z')||(ch>='a'&&ch<='z')||(ch >= '0' && ch <= '9')) {
          array.push(ch.toLowerCase());
      }
  }
  for (let i = 0; i<Math.floor(array.length/2);i++) {
      if (array[i]!==array[array.length-1-i]) {
          return false;
      }
  }
  return true;
      
};