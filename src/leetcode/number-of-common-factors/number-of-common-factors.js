/**
* Leetcode #2427
* Difficulty: Easy
* https://leetcode.com/problems/number-of-common-factors/
*/
export const numberOfCommonFactors = (a, b) => {
    const dividorsA = new Set();
    
    for (let i = 1; a / i >= 1; i += 1) {
        if (a % i === 0) dividorsA.add(i);
    }
    
    for (const dividor of dividorsA) {
        if (b % dividor !== 0) dividorsA.delete(dividor);
    }
    
    return dividorsA.size;
};