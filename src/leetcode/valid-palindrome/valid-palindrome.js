/**
* Leetcode #125
* Difficulty: Easy
* https://leetcode.com/problems/valid-palindrome/
*/
export const validPalindrome = (s) => {
	const lowRegStr = s.toLowerCase().replace(/[\W_]/g, '');
    const reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr; 
};