//Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length === 0) {
      return true;
  }
  let start = ['{','[','('];
  let save = [s[0]];
  let index = 0;
  let curr;
  for (let i = 1; i < s.length; i++) {
      if (save.length === 0) {
          save.push(s[i])
      } else {
      curr = save[save.length-1];
      if (curr === '(') {
          if (start.indexOf(s[i])>-1) {
              save.push(s[i]);
          } else if (s[i] !== ')') {
              return false;
          } else {
              save.pop();
          }
      } else if (curr === '[') {
          if (start.indexOf(s[i])>-1) {
              save.push(s[i]);
          } else if (s[i] !== ']') {
              return false;
          } else {
              save.pop();
          }
      } else if (curr === '{') {
          if (start.indexOf(s[i])>-1) {
              save.push(s[i]);
          } else if (s[i] !== '}') {
              return false;
          } else {
              save.pop();
          }
      } else {
          return false;
      }
      }
  }
  if (save.length !== 0) {
      console.log(save)
      return false
  } else {
      return true;
  }
};