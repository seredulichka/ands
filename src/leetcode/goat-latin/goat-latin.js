/**
* Leetcode #824
* Difficulty: Easy
* https://leetcode.com/problems/goat-latin/
*/
export const goatLatin = sentence => {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const words = sentence.split(' ')
    
    for (let i = 0; i < words.length; i += 1) {
        let word = words[i];
        if (!vowels.has(word[0].toLowerCase())) { 
           word = word.slice(1) + word[0];
        }
        
        word += 'ma';
        for (let j = 0; j < i + 1; j += 1) {
            word += 'a';
        }
        
        words[i] = word;
    }
    
    return words.join(' ');
};