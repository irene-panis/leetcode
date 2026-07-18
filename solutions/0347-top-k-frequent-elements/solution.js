/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const mp = new Map();
    for (const num of nums) {
        mp.set(num, (mp.get(num) ?? 0) + 1);
    }
    const arr = Array.from(mp.entries()).sort((a, b) => b[1] - a[1]);
    return arr.slice(0, k).map(([num]) => num);
};
