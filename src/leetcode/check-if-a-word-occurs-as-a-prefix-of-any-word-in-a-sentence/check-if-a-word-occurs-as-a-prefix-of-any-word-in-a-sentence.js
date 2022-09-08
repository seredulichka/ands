/**
* Leetcode #1455
* Difficulty: Easy
* https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/
*/
export const checkIfAWordOccursAsAPrefixOfAnyWordInASentence= (sentence, searchWord) => {
    const array = sentence.split(" ")
     
    for (let i = 0; i < array.length; i += 1) {
        if(array[i].slice(0, searchWord.length) === searchWord) return i + 1;
    }
    
    return -1
};