/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length != t.length) return false;
  for (let i = 0; i < s.length; i++) {
    // indexOf finds first occurrence of letter in t; if == -1 then its not found, returns false
    if (t.indexOf(s[i]) == -1) return false;
    // replace letter in t with empty space
    t = t.replace(s[i], '');
  }
  return true;
};
