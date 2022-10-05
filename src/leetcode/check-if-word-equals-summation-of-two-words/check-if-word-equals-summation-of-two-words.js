/**
* Leetcode #1880
* Difficulty: Easy
* https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/
*/
export const checkIfWordEqualsSummationOfTwoWords = (firstWord, secondWord, targetWord) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const map = new Map();
    for (let i = 0; i < alphabet.length; i += 1) {
        map.set(alphabet[i], i + '');
    }
    
    const toNumber = str => +str.split('')
                               .reduce((acc, curr) => acc + map.get(curr), '');

    return toNumber(firstWord) + toNumber(secondWord) === toNumber(targetWord);
};