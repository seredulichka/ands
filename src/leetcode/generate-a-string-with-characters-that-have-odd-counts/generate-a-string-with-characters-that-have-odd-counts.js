/**
* Leetcode #1374
* Difficulty: Easy
* https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/
*/

// export const generateAStringWithCharactersThatHaveOddCounts = n => {
//     let result = '';
    
//     for (let i = 0; i < n; i += 1) {
//         if (n % 2 === 0 && i === 0) {
//            result += 'b'; 
//         } else {
//             result += 'a'; 
//         }
//     }
    
//     return result;
// };

export const generateAStringWithCharactersThatHaveOddCounts = n => {
    return n % 2 === 1 ? `${'a'.repeat(n)}` : `b${'a'.repeat(n-1)}`
};