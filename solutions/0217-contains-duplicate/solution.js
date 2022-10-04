/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let newNums = [];
  for (let i = 0; i < nums.length; i++) {
    if (newNums.includes(nums[i])) return true;
    newNums.push(nums[i]);
  }
  return false;
};
