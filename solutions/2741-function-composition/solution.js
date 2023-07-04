/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) { // 4
        let current = x; // current = 4
        for (let i = functions.length - 1; i >= 0; i--) {
            current = functions[i](current); // current = should be 8
        }
        return current;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
