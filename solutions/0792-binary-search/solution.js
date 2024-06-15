/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        let m = l + (Math.floor((r - l) / 2)); // find distance btwn L and R then divide by 2 for midpoint
        if (nums[m] > target) { // if nums[m] is greater than target then move right pointer down (since greater values no longer needed)
            r = m - 1;
        } else if (nums[m] < target) { // if nums[m] is less than target move left pointer up
            l = m + 1;
        } else {
            return m;
        }
    }
    return -1;
};
