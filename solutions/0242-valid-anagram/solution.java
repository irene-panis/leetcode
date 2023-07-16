class Solution {
    public boolean isAnagram(String s, String t) {
        // initialize hashmap
        Map<Character, Integer> count = new HashMap<>();

        // count frequency of characters in string s
        for (char x : s.toCharArray()) {
            //getOrDefault gets value of key x; if key doesn't exist default to 0
            // gets value then adds 1 to it to increment
            count.put(x, count.getOrDefault(x, 0) + 1);
        }

        // decrement frequency of characters in string t
        for (char x : t.toCharArray()) {
            count.put(x, count.getOrDefault(x, 0) - 1);
        }

        // check if any character has non-zero frequency
        for (int val : count.values()) {
            if (val != 0) {
                return false;
            }
        }

        return true;
    }
}
