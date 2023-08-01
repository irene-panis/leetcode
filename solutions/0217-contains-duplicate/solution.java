/*
1. use hashset for this
2. iterate over nums
3. if our hashset contains current num we return true
4. otherwise, add current num to hashset
5. after we iterate we return false by default
*/
class Solution {
    public boolean containsDuplicate(int[] nums) {
        HashSet<Integer> seen = new HashSet<>();
        for (int num : nums) {
            if (seen.contains(num)) {
                return true;
            }
            seen.add(num);
        }
        return false;
    }
}
