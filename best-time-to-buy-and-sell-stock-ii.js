//Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let total = 0;
    for (let i =1; i<prices.length; i++ ) {
        if (prices[i]>prices[i-1]) {
            total+= prices[i]-prices[i-1];
        }
    }
    return total;
};