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





// const maxProfit = (prices) => {
//     let l = 0,
//             r = 1;
//         let maxP = 0;

//         while (r < prices.length) {
//             if (prices[l] < prices[r]) {
//                 let profit = prices[r] - prices[l];
//                 maxP = Math.max(maxP, profit);
//             } else {
//                 l = r;
//             }
//             r++;
//         }
//         return maxP;
// }