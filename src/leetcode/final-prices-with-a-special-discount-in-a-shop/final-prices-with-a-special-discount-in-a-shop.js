/**
* Leetcode #1475
* Difficulty: Easy
* https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/
*/
export const finalPricesWithASpecialDiscountInAShop = prices => {
    
    for (let i = 0; i < prices.length; i += 1) {
        let newPrice = prices[i];
        
        for (let j = i + 1; j < prices.length; j += 1) {
            if (prices[j] <= newPrice) {
                newPrice -= prices[j];
                break;
            } 
        }
        
        prices[i] = newPrice;
    }
    
    return prices;
};