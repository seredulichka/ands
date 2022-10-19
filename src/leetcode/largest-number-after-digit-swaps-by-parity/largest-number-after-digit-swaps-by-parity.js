/**
* Leetcode #2231
* Difficulty: Easy
* https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/
*/
export const LargestNumberAfterDigitSwapsByParity = num => {
    const oddSet = new Set('13579'.split(''));
    const digits = num.toString().split('');
    const oddDigits = digits.filter(d => oddSet.has(d)).sort((a, b) => a - b);
    const evenDigits = digits.filter(d => !oddSet.has(d)).sort((a, b) => a - b);
   
    let result = '';
    
    for (let i = 0; i < digits.length; i++) {
        result += oddSet.has(digits[i]) ? oddDigits.pop() : evenDigits.pop();
    }
    
    return +result;
};