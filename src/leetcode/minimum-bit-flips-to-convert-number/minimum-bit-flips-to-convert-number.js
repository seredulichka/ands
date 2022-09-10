/**
* Leetcode #2220
* Difficulty: Easy
* https://leetcode.com/problems/minimum-bit-flips-to-convert-number/
*/
export const minimumBitFlipsToConvertNumber = (start, goal) => { 
    start = start.toString(2);
    goal = goal.toString(2);
 
    let result = 0;
    
    for (let i = goal.length - 1, j = start.length -1; i >= 0 || j >= 0; i -= 1, j -= 1) {
        if((goal[i] ?? 0) != (start[j] ?? 0)) result += 1;
    }
    
    return result;
};