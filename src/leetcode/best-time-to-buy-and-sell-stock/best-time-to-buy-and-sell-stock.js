/**
* Leetcode #121
* Difficulty: Easy
* https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
*/
export const bestTimeToBuyAndSellStock = (prices) => {
	let min = prices[0];
    let result = 0;
    for (let i = 0; i < prices.length; i += 1) {
        const a = prices[i]
        if(a < min) {
            min = a;
        } else {
            result = Math.max(a - min , result)
        }
    }
    return result
};