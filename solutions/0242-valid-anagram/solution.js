/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const sCounts = new Map();
    const tCounts = new Map();

    for (const letter of s) {
        sCounts.set(letter, (sCounts.get(letter) ?? 0) + 1);
    }
    for (const letter of t) {
        tCounts.set(letter, (tCounts.get(letter) ?? 0) + 1);
    }

    for (const [letter] of sCounts.entries()) {
        if (sCounts.get(letter) !== tCounts.get(letter)) return false;
    }
    return true;
};
