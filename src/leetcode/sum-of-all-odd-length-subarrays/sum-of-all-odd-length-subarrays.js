/**
* Leetcode #1588
* Difficulty: Easy
* https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
*/
export const sumOfAllOddLengthSubarrays = (arr) => {
	let result = 0;
    let length = arr.length;
    for(let i = length; i >= 1; i -= 1) {
        if(i % 2 === 0) continue
        for(let j = 0; j <= length - i; j += 1) {
            const newArr = arr.slice(j, j + i);
            result += newArr.reduce((init, acc) => init + acc);
        }
    }
    return result;
};