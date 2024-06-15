/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let sCount = {}; // store counts in objects
    let tCount = {};
    for (let i = 0; i < s.length; i++) {
        sCount[s[i]] = 1 + (sCount[s[i]] || 0);
        tCount[t[i]] = 1 + (tCount[t[i]] || 0);
    }
    for (const key in sCount) {
        if (sCount[key] !== tCount[key]) {
            return false;
        }
    }
    return true;
};
