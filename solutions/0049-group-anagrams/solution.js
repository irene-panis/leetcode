/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const groups = new Map();
    for (const str of strs) {
        const sorted = [...str].sort().join("");
        groups.set(sorted, (groups.get(sorted) ? groups.get(sorted).concat([str]) : [str]));
    }
    return [...groups.values()];
};
