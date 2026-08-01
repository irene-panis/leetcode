/**
 * @param {string} s
 * @return {boolean}
 */
var isAlphanumeric = function(c) {
    return (
        (c >= "a" && c <= "z") ||
        (c >= "A" && c <= "Z") ||
        (c >= "0" && c <= "9") 
    );
}

var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        while (left < right && !isAlphanumeric(s[left])) {
            left++;
        }
        while (right > left && !isAlphanumeric(s[right])) {
            right--;
        }
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};
