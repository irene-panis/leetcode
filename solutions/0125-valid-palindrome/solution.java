class Solution {
    public boolean isPalindrome(String s) {
        if (s.isEmpty()) { // if string is empty return true
            return true;
        }
        int start = 0; // create two pointers so we can compare letters from beginning and end of string
        int last = s.length() - 1;
        while (start <= last) { // basically just iterate over string from front and back comparing
            char currFirst = s.charAt(start);
            char currLast = s.charAt(last);
            if (!Character.isLetterOrDigit(currFirst)) { // if character isnt letter or digit move on to next
                start++;
            } else if (!Character.isLetterOrDigit(currLast)) {
                last--;
            } else { // if both front and back chars are letter/digits, compare
                if (Character.toLowerCase(currFirst) != Character.toLowerCase(currLast)) { // end if comparison bad
                    return false;
                }
                start++; // move on if comparison good so far
                last--;
            }
        }
        return true;
    }
}
