function maxProfit(prices) {
  this.prices = prices;
  let maxProfit = 0;
  let minPrice = this.prices[0];
  for (let i = 0; i < this.prices.length; i++) {
    minPrice = Math.min(minPrice, this.prices[i]);
    maxProfit = Math.max(maxProfit, (this.prices[i] - minPrice));
  }
  if (maxProfit === 0) {
    return -1;
  }
  return maxProfit;
}
console.log(maxProfit([45, 24, 11]));
