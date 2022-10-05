/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let shorterArr;
  let longerArr;
  if (nums1.length > nums2.length) {
    shorterArr = nums2;
    longerArr = nums1;
  } else {
    shorterArr = nums1;
    longerArr = nums2;
  }
  let intersection = [];
  for (let i = 0; i < shorterArr.length; i++) {
    if (intersection.includes(shorterArr[i])) continue;
    if (longerArr.includes(shorterArr[i])) {
      intersection.push(shorterArr[i]);
    }
  }
  return intersection;
};
