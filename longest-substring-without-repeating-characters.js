// Given a string, find the length of the longest substring without repeating characters.
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let size = 0;
    let obj = {};
    index = 0;
    while (index < s.length) {
        // if obj does not exist
        if (obj[s[index]] === undefined) {
            obj[s[index]] = index;
            size++;
            if (size > max) {
                max = size;
            }
            index++;
        } else {
            index = obj[s[index]] + 1;
            obj = {};
            size = 0;
        }
    }
    return max;
};
