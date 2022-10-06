/**
* Leetcode #41974-d
* Difficulty: Easy
* https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/
*/
export const minimumTimeToTypeWordUsingSpecialTypewriter  = word => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = 0;
    let start = 0;
    
    for (let i = 0; i < word.length; i += 1) {
        const current = alphabet.indexOf(word[i]);

        result += Math.min(Math.abs(start - current), 26 - Math.max(start, current) + Math.min(start, current));

        result += 1;
        start = current;
    } 

    return result;
};