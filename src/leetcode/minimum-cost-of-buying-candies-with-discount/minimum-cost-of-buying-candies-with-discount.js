/**
* Leetcode #2144
* Difficulty: Easy
* https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/
*/
export const minimumCostOfBuyingCandiesWithDiscount = cost => {
    cost.sort((a, b) => b - a)
    let result = 0;
    
    for (let i = 0; i < cost.length; i += 1) {
        if ((i + 1) % 3 !== 0) result += cost[i]
    }
    
    return result;
};