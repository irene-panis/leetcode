/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let l = 0;
    let r = k - 1;
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    let max = sum;
    while (r < nums.length) {
        if (sum > max) {
            max = sum;
        }
        r++;
        sum = sum - nums.at(l) + nums.at(r);
        l++;
    }
    return max / k;
};
