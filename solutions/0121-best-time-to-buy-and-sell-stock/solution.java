class Solution {
    public int maxProfit(int[] prices) {
        int cheapest = Integer.MAX_VALUE; // create variable to hold cheapest value; initialize as max int for now
        int largestProfit = 0; // our largest profit recorded so far
        int currentProfit = 0; // the current profit we will make

        for (int i = 0; i < prices.length; i++) { // iterate over array
            if (prices[i] < cheapest) { // if current price is less than cheapest we update cheapest
                cheapest = prices[i];
            }
            currentProfit = prices[i] - cheapest; // calculate current profit by doing current price minus cheapest
            if (largestProfit < currentProfit) { // if our current profit is bigger than our stored largest profit we update largest profit
                largestProfit = currentProfit;
            }
        }
        return largestProfit; // iterate over entire array then return largest profit
    }
}
