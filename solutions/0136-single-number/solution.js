/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const solution = nums.filter((number, i) => 
                               (nums.lastIndexOf(number) == i)
                              && (nums.indexOf(number) == i));
  return solution[0];
};
