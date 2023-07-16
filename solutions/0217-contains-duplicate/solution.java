/**
 * @param {number[]} nums
 * @return {boolean}
 */
class Solution {
    public boolean containsDuplicate(int[] nums) {
        HashSet<Integer> seen = new HashSet<>(); // initialize hashset = good for unique values
        for (int num : nums) { // for number in nums
            if(seen.contains(num)) { // if hashset contains that number
                return true; // return true = yes, there are duplicates
            }
            seen.add(num); // add that number into hashset
        }
        return false; // if we iterate over entire thing and find no dupes return false
    }
}
