/**
* Leetcode #873
* Difficulty: Easy
* https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/
*/
export const lengthOfLongestFibonacciSubsequence = arr => {
    const set = new Set(arr);
    let max = 0;

    for (let i = 0; i < arr.length; i += 1) {
        for (let j = i + 1; j < arr.length; j += 1) {
            let current = arr[i];
            let next = arr[j];
            let length = 0;

            while (set.has(current + next)) {
                length += current === arr[i] ? 3 : 1;
                let newNext = current + next;
                current = next;
                next = newNext;
            }
            
            max = Math.max(max, length)
        }
    }
    
    return max;
};