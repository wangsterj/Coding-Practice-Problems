/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let obj = {};
    let index = 0;
    let start = 0;
    while (index < s.length) {
        // if obj does not exist 
        if (obj[s[index]] === undefined || obj[s[index]] < start) {
            obj[s[index]] = index;
            index++;
            if ((index - start) > max) {
                max = index - start;
            }
        } else {
            start = obj[s[index]] + 1;
            obj[s[index]] = undefined;
        }
    }
    return max;
};