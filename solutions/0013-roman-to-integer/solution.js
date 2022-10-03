/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    var numToAddTo = 0;
    
    for (i = 0; i < s.length; i++) {
        switch(s.charAt(i)) {
            case 'I':
                if (i == s.length - 1) {
                    numToAddTo += 1;
                    break;
                }
                if (s.charAt(i + 1) == 'V') {
                    numToAddTo += 4;
                    i++;
                } else if (s.charAt(i + 1) == 'X') {
                    numToAddTo += 9;
                    i++;
                } else {
                    numToAddTo += 1;
                }
                break;
            case 'V':
                numToAddTo += 5;
                break;
            case 'X':
                if (i == s.length - 1) {
                    numToAddTo += 10;
                    break;
                }
                if (s.charAt(i + 1) == 'L') {
                    numToAddTo += 40;
                    i++;
                } else if (s.charAt(i + 1) == 'C') {
                    numToAddTo += 90;
                    i++;
                } else {
                    numToAddTo += 10;
                }
                break;
            case 'L':
                numToAddTo += 50;
                break;
            case 'C':
                if (i == s.length - 1) {
                    numToAddTo += 100;
                    break;
                }
                if (s.charAt(i + 1) == 'D') {
                    numToAddTo += 400;
                    i++;
                } else if (s.charAt(i + 1) == 'M') {
                    numToAddTo += 900;
                    i++;
                } else {
                    numToAddTo += 100;
                }
                break;
            case 'D':
                numToAddTo += 500;
                break;
            case 'M':
                numToAddTo += 1000;
                break;
        }
        
    }
    
    return numToAddTo;
    
};
