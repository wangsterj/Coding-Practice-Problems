//If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length===0) {
      return 0;
  }
  let min = prices[0];
  let result = 0;
  for (let i = 0; i< prices.length; i++) {
      if (min > prices[i]) {
          min = prices[i];
      }
      if (prices[i] - min > result) {
          result = prices[i] - min;
      }
  }
  return result;
};