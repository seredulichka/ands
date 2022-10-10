/**
* Leetcode #1935
* Difficulty: Easy
* https://leetcode.com/problems/maximum-number-of-words-you-can-type/
*/
export const maximumNumberOfWordsYouCanType = (text, brokenLetters) => {
    const broken = new Set([...brokenLetters.split('')]);
    
    let result = 0;
    let isBroken = false;
    
    for (let i = 0; i < text.length; i += 1) {
        if (broken.has(text[i])) {
            isBroken = true;
        }
        if(text[i] === ' ' || i === text.length - 1) {
            if (!isBroken) result += 1;
            isBroken = false;
        }
    }
    
    return result;
};