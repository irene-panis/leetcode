/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let stringReversed = '';
  s = s.toLowerCase().replace(/\s/g, "").replace(/[^0-9a-z]/gi, "");
  for (let i = 0; i < s.length; i++) {
    stringReversed = stringReversed.concat(s[s.length - 1 - i]);
  }
  console.log(stringReversed);
  if (stringReversed != s) return false;
  return true;
};
