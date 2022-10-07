/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const trimmed = s.replace(/\s+/g, " ").trim();
  const array = trimmed.split(' ');
  return array[array.length - 1].length;
};
