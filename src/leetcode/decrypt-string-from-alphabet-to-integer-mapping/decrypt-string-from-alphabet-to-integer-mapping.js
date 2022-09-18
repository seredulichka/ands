/**
* Leetcode #1309
* Difficulty: Easy
* https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/
*/
// export const decryptStringFromAlphabetToIntegerMapping = s => {
//     let result = '';
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
//     for (let i = 0; i < s.length; ) {
//         if (s[i+2] === '#') {
//             const ind = `${s[i]}${s[i+1]}`;
//             result += alphabet[ind - 1];
//             i += 3;
//         } else {
//             result += alphabet[s[i] - 1];
//             i += 1;
//         }
//     }
    
//     return result;
// };
export const decryptStringFromAlphabetToIntegerMapping = s => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const map = new Map();
    
    for (let i = 0; i < alphabet.length; i += 1) {
        map.set(i + 1, alphabet[i])
    }
    
    let result = '';
    
    for (let i = 0; i < s.length; ) {
        if (s[i+2] === '#') {
            const ind = `${s[i]}${s[i+1]}`;
            result +=  map.get(+ind);
            i += 3;
        } else {
            result +=  map.get(+s[i]);
            i += 1
        }
    }
    
    return result;
};