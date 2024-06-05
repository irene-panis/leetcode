/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let mp = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (mp.has(nums[i])) {
            return true;
        }
        mp.set(nums[i], i);
    }
    return false;
};
