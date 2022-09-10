/**
* Leetcode #1614
* Difficulty: Easy
* https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/
*/
export const maximumNestingDepthOfTheParentheses = s => {
    const map = new Map();
    let max = 0;
    
    for (const symbol of s) {
        if(symbol === "(") {
            map.set("(", (map.get(symbol) ?? 0) + 1);
            if (map.get(symbol) > max) max = map.get(symbol);
        } else if (symbol === ")") {
            map.set("(", map.get("(") - 1);
        }
    }
        
    return max;
};