/**
* Leetcode #2042
* Difficulty: Easy
* https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/
*/
export const checkIfNumbersAreAscendingInASentence = s => {
    const set = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
    
    const arr = s.split(' ');
    let prev = -1;
    
    for (const word of arr) {
        if (set.has(word[0])) {
            if (+word <= prev) return false;
            prev = +word;
        }
    }
    
    return true;
};