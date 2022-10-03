/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    var numAsString = x.toString();
    var numLength = numAsString.length;
    var halfPoint = Math.floor(numAsString.length / 2);
    
    for (i = 1; i <= halfPoint; i++) {
        if (numAsString.charAt(i - 1) != numAsString.charAt(numLength - i)) {
            return false;
        }
    }
    
    return true;
    
};
