class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> numsMap = new HashMap<>(); // create hashmap
        for (int i = 0; i < nums.length; i++) { // iterate over array given
            int complement = target - nums[i]; // determine complement target - nums[i]
            if (numsMap.containsKey(complement)) { // check if map contains complement
                return new int[]{numsMap.get(complement), i}; // return complement index and other index
            }
            numsMap.put(nums[i], i);
        }
        return new int[]{};
    }
}
