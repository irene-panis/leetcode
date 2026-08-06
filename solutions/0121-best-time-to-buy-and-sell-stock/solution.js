/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let l = 0;
    let r = 1;
    let max = 0;
    while (r < prices.length) {
        // profitable?
        if (prices[l] < prices[r]) {
            const profit = prices[r] - prices[l];
            if (profit > max) {
                max = profit;
            }
        } else {
            l = r; // found new low
        }
        r++;
    }
    return max;
};
