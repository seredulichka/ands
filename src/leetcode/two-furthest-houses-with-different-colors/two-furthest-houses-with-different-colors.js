/**
* Leetcode #2078
* Difficulty: Easy
* https://leetcode.com/problems/two-furthest-houses-with-different-colors/
*/
export const twoFurthestHousesWithDifferentColors = colors => {
    let max = 0;
    
    for (let i = 0; i < colors.length; i += 1) {
        for (let j = colors.length - 1; j >= 0; j -= 1) {
            if(colors[i] !== colors[j] && Math.abs(i-j) > max){
                max = Math.abs(i-j);
            }
        }
    }
    
    return max;
};