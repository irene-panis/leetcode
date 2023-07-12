/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = "";
    for (let i = 0; i < strs[0].length; i++) { // iterates over letters in first word
        for (let j = 1; j < strs.length; j++) { // iterates over rest of words
            if (strs[0].charAt(i) !== strs[j].charAt(i)) {
                return prefix;
            }
        }
        prefix += strs[0].charAt(i);
    }
    return prefix;
};
