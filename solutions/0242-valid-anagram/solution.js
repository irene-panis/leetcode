/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) { return false; }

    const sortS = s.split("").sort();
    const sortT = t.split("").sort();

    for (let i = 0; i < sortS.length; i++) {
        if (sortS[i] !== sortT[i]) { return false ;}
    }

    return true;
};
