/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const seen = new Map();

    for (const num of nums) {
        if (seen.has(num)) return true;
        seen.set(num, true);
    }

    return false;
};
