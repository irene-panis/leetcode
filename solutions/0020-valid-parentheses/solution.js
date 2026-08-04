/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const hash = { '(': ')', '{': '}', '[': ']'}
    for (const ch of s) {
        if (ch == '(' || ch == '[' || ch == '{') {
            stack.push(ch);
        } else {
            if (hash[stack.pop()] !== ch) return false;
        }
    }
    return stack.length === 0;
};
