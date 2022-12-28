/**
* Leetcode #2062
* Difficulty: Easy
* https://leetcode.com/problems/count-vowel-substrings-of-a-string/
*/
export const countVowelSubstringsOfAString = word => {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let counter = 0;

    for (let i = 0; i < word.length; i +=1) {
        if(vowels.has(word[i])) {
            const set = new Set(word[i]);
            
            for (let j = i + 1; j < word.length; j +=1) {
                if (!vowels.has(word[j])) break;
                set.add(word[j]);
                if (set.size === 5) counter += 1;
            }
        }
    }

    return counter;
};