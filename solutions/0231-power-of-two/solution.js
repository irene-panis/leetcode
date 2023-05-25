/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let test = 0;
    let power = 0;
    while (test < n) {
        test = 2 ** power;
        if (n === test) { return true; }
        power++;
    }
    return false;
};
