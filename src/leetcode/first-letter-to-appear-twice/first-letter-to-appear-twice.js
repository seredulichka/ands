/**
* Leetcode #2351
* Difficulty: Easy
* https://leetcode.com/problems/first-letter-to-appear-twice/
*/
export const firstLetterToAppearTwice  = s => {
    const set = new Set();
    
    for (let i = 0; i < s.length; i += 1) {
        const currentLetter = s[i]
        if(set.has(currentLetter)) {
             return currentLetter 
        }
        set.add(currentLetter);
    }
};