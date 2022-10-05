/**
* Leetcode #1051
* Difficulty: Easy
* https://leetcode.com/problems/height-checker/
*/
export const heightChecker = heights => {
    return [...heights]
        .sort((a, b) => a - b)
        .reduce((acc, cur, i) => (cur !== heights[i] ? acc + 1 : acc), 0);
};

// export const heightChecker = heights => {
//     const expected = [...heights].sort((a, b) => a - b);
//     let result = 0;

//     for (let i = 0; i < heights.length; i += 1) {
//         if (heights[i] !== expected[i]) result += 1;
//     }
        
//     return result;
// };