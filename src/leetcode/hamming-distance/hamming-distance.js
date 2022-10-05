/**
* Leetcode #461
* Difficulty: Easy
* https://leetcode.com/problems/hamming-distance/
*/
export const hammingDistance = (x, y) => {
    const binaryX = x.toString(2);
    const binaryY = y.toString(2);
   
    let counter = 0;

    for (let i = binaryX.length - 1, j = binaryY.length - 1; j >= 0 || i >= 0; j -= 1, i -=1) {
        if((binaryX[i] ?? 0) != (binaryY[j] ?? 0)) counter += 1;
    }
    
    return counter;
};