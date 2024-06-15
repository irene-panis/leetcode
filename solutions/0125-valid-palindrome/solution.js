/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        while (l < r && !isAlphaNum(s[l])) {
            l++;
        }
        while (r > l && !isAlphaNum(s[r])) {
            r--;
        }
        if (s[l].toLowerCase() !== s[r].toLowerCase()) {
            return false;
        }
        l++;
        r--;
    }
    return true;
}

var isAlphaNum = function(c) { // func for checking if character is alphanumeric Aa-Zz 0-9
    const charCode = c.charCodeAt(0);
    return (
        (65 <= charCode && charCode <= 90) ||
        (97 <= charCode && charCode <= 122) ||
        (48 <= charCode && charCode <= 57)
    );
}
