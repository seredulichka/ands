/**
* Leetcode #2124
* Difficulty: Easy
* https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/
*/
export const checkIfAllAsAppearsBeforeAllBs = s => {
    let lastA = -Infinity
    let firstB = null
    
    for (let i = 0; i < s.length; i += 1) {
        if (s[i] === 'b') {
            if (firstB === null) firstB = i;
        } else {
            lastA = i;
        }
    }
    
    return firstB > lastA;
};