/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const st = new Set();
    for (const num of nums) {
        if (st.has(num)) return true;
        st.add(num);
    }
    return false;
};
