const maxProfit = (prices) => {
	let minPrice = prices[0];
	let maxProfit = 0;

	for (let i = 1; i < prices.length; i++) {
		if (minPrice < prices[i]) {
			let profit = prices[i] - minPrice;
			maxProfit = Math.max(profit, maxProfit);
		} else {
			minPrice = prices[i];
		}
	}

	return maxProfit;
};
